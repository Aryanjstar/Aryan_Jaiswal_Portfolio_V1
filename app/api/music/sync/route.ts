import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

import { isPostAlreadyAdded } from "@/lib/instagram";
import { generatePerformanceEntry, type Performance } from "@/lib/music-ai";

const PERFORMANCES_PATH = join(process.cwd(), "data", "performances.json");

/**
 * POST /api/music/sync
 *
 * Accepts a new Instagram post and generates a creative performance entry
 * using Azure OpenAI, then prepends it to the performances JSON.
 *
 * Body: { postUrl: string, caption: string, singerHint?: string }
 *
 * This can be triggered:
 * - Manually via a simple HTTP call
 * - Via a cron job / webhook that detects new Instagram posts
 */
export async function POST(req: NextRequest) {
	try {
		const authHeader = req.headers.get("authorization");
		const expectedToken = process.env.SYNC_API_TOKEN;

		if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const body = await req.json();
		const { postUrl, caption, singerHint } = body;

		if (!postUrl || !caption) {
			return NextResponse.json(
				{ error: "postUrl and caption are required" },
				{ status: 400 }
			);
		}

		const fileContent = await readFile(PERFORMANCES_PATH, "utf-8");
		const performances: Performance[] = JSON.parse(fileContent);

		if (isPostAlreadyAdded(performances, postUrl)) {
			return NextResponse.json(
				{ message: "Post already exists", skipped: true },
				{ status: 200 }
			);
		}

		const nextId =
			Math.max(...performances.map((p) => p.id), 0) + 1;

		const newEntry = await generatePerformanceEntry(
			{ caption, postUrl, singerHint },
			nextId
		);

		performances.unshift(newEntry);

		await writeFile(PERFORMANCES_PATH, JSON.stringify(performances, null, 2));

		return NextResponse.json(
			{ message: "Performance added successfully", entry: newEntry },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Music sync error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}

/**
 * GET /api/music/sync
 *
 * Returns current performances list for debugging/verification.
 */
export async function GET() {
	try {
		const fileContent = await readFile(PERFORMANCES_PATH, "utf-8");
		const performances: Performance[] = JSON.parse(fileContent);

		return NextResponse.json({
			count: performances.length,
			performances,
		});
	} catch (error) {
		console.error("Music fetch error:", error);
		return NextResponse.json(
			{ error: "Failed to read performances" },
			{ status: 500 }
		);
	}
}
