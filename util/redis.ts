import { Redis } from "@upstash/redis";

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;
const isConfigured = Boolean(url && token);

if (!isConfigured && process.env.NODE_ENV !== "development") {
	throw new Error(
		"UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN are required outside development.",
	);
}

if (!isConfigured) {
	console.warn(
		"Upstash Redis is not configured; page-view tracking is disabled in development.",
	);
}

export const redis =
	isConfigured && url && token ? new Redis({ url, token }) : null;
