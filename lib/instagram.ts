import type { Performance } from "./music-ai";

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/notesbyaryan/";

export interface InstagramPost {
	url: string;
	caption: string;
	timestamp: string;
}

/**
 * Fetches recent posts from Instagram using the public oEmbed endpoint.
 * Since Instagram's Graph API requires app review, we use a lightweight
 * approach: the caller provides the post URL when triggering the sync.
 */
export async function fetchInstagramPostMeta(postUrl: string): Promise<{
	title: string;
	authorName: string;
	thumbnailUrl?: string;
} | null> {
	try {
		const oembedUrl = `https://api.instagram.com/oembed?url=${encodeURIComponent(postUrl)}&omitscript=true`;
		const res = await fetch(oembedUrl, {
			next: { revalidate: 3600 },
		});

		if (!res.ok) return null;

		const data = await res.json();
		return {
			title: data.title || "",
			authorName: data.author_name || "notesbyaryan",
			thumbnailUrl: data.thumbnail_url,
		};
	} catch {
		return null;
	}
}

/**
 * Check if a post URL already exists in the performances list
 */
export function isPostAlreadyAdded(
	performances: Performance[],
	postUrl: string
): boolean {
	return performances.some(
		(p) => p.link === postUrl || p.link.includes(postUrl.split("/").pop() || "")
	);
}
