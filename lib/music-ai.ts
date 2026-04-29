export interface Performance {
	id: number;
	title: string;
	titleHindi: string;
	description: string;
	vibe: string;
	link: string;
	accent: string;
	pattern: string;
	singer?: string;
	postedAt?: string;
}

const ACCENT_OPTIONS = [
	"from-rose-400 to-red-600",
	"from-sky-500 to-blue-600",
	"from-emerald-500 to-teal-600",
	"from-rose-500 to-pink-600",
	"from-amber-500 to-orange-600",
	"from-cyan-500 to-teal-600",
	"from-violet-500 to-purple-600",
	"from-indigo-500 to-violet-600",
	"from-fuchsia-500 to-purple-600",
	"from-lime-500 to-green-600",
];

const PATTERN_OPTIONS = [
	"radial-gradient(circle at 50% 60%, rgba(251, 113, 133, 0.25) 0%, transparent 50%), radial-gradient(circle at 30% 30%, rgba(239, 68, 68, 0.2) 0%, transparent 40%)",
	"radial-gradient(circle at 60% 80%, rgba(14, 165, 233, 0.25) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(37, 99, 235, 0.2) 0%, transparent 40%)",
	"radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.25) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(20, 184, 166, 0.2) 0%, transparent 40%)",
	"radial-gradient(circle at 30% 70%, rgba(244, 63, 94, 0.25) 0%, transparent 50%), radial-gradient(circle at 70% 20%, rgba(236, 72, 153, 0.2) 0%, transparent 40%)",
	"radial-gradient(circle at 60% 80%, rgba(245, 158, 11, 0.25) 0%, transparent 50%), radial-gradient(circle at 20% 40%, rgba(249, 115, 22, 0.2) 0%, transparent 40%)",
	"radial-gradient(circle at 80% 60%, rgba(6, 182, 212, 0.25) 0%, transparent 50%), radial-gradient(circle at 30% 20%, rgba(20, 184, 166, 0.2) 0%, transparent 40%)",
	"radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.2) 0%, transparent 40%)",
	"radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.2) 0%, transparent 40%)",
];

interface AIMusicInput {
	caption: string;
	postUrl: string;
	singerHint?: string;
}

/**
 * Uses Azure OpenAI to generate a creative performance entry
 * from an Instagram post caption.
 */
export async function generatePerformanceEntry(
	input: AIMusicInput,
	nextId: number
): Promise<Performance> {
	const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
	const apiKey = process.env.AZURE_OPENAI_API_KEY;
	const deployment = process.env.AZURE_OPENAI_CHATGPT_DEPLOYMENT || "gpt-4.1";
	const apiVersion =
		process.env.AZURE_OPENAI_API_VERSION || "2025-01-01-preview";

	if (!endpoint || !apiKey) {
		return createFallbackEntry(input, nextId);
	}

	const url = `${endpoint}openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`;

	const systemPrompt = `You are a creative assistant helping format music posts for a personal portfolio music page called "notesbyaryan". 
The page has a bilingual (Hindi-English) romantic/emotional tone. Each entry has:
- title: The song name in English/Roman (short, max 4 words)
- titleHindi: The song name in Devanagari script
- description: A short creative one-liner (can be Hindi/English mix, use emojis sparingly, max 8 words)
- vibe: A poetic/emotional tagline about the song (can be Hindi or English, max 15 words)
- singer: The original singer's name

Keep the tone intimate, poetic, and slightly melancholic. Mix Hindi and English naturally.
Return ONLY valid JSON with these exact fields: title, titleHindi, description, vibe, singer`;

	const userPrompt = `Instagram caption: "${input.caption}"
Post URL: ${input.postUrl}
${input.singerHint ? `Singer hint: ${input.singerHint}` : ""}

Generate the performance entry fields.`;

	try {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"api-key": apiKey,
			},
			body: JSON.stringify({
				messages: [
					{ role: "system", content: systemPrompt },
					{ role: "user", content: userPrompt },
				],
				temperature: 0.8,
				max_tokens: 300,
			}),
		});

		if (!res.ok) {
			console.error("Azure OpenAI error:", await res.text());
			return createFallbackEntry(input, nextId);
		}

		const data = await res.json();
		const content = data.choices?.[0]?.message?.content || "";

		const jsonMatch = content.match(/\{[\s\S]*\}/);
		if (!jsonMatch) {
			return createFallbackEntry(input, nextId);
		}

		const parsed = JSON.parse(jsonMatch[0]);

		const accentIndex = nextId % ACCENT_OPTIONS.length;
		const patternIndex = nextId % PATTERN_OPTIONS.length;

		return {
			id: nextId,
			title: parsed.title || "Untitled",
			titleHindi: parsed.titleHindi || "",
			description: parsed.description || "",
			vibe: parsed.vibe || "",
			link: input.postUrl,
			accent: ACCENT_OPTIONS[accentIndex],
			pattern: PATTERN_OPTIONS[patternIndex],
			singer: parsed.singer || input.singerHint || "Unknown",
			postedAt: new Date().toISOString().split("T")[0],
		};
	} catch (error) {
		console.error("Failed to generate via AI:", error);
		return createFallbackEntry(input, nextId);
	}
}

function createFallbackEntry(
	input: AIMusicInput,
	nextId: number
): Performance {
	const accentIndex = nextId % ACCENT_OPTIONS.length;
	const patternIndex = nextId % PATTERN_OPTIONS.length;

	const captionLines = input.caption.split("\n").filter(Boolean);
	const title = captionLines[0]?.substring(0, 30) || "New Drop";

	return {
		id: nextId,
		title,
		titleHindi: "",
		description: "New song added",
		vibe: captionLines[1]?.substring(0, 50) || "Feel the music",
		link: input.postUrl,
		accent: ACCENT_OPTIONS[accentIndex],
		pattern: PATTERN_OPTIONS[patternIndex],
		singer: input.singerHint || "Unknown",
		postedAt: new Date().toISOString().split("T")[0],
	};
}
