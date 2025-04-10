// Generated by Wrangler on Mon Sep 30 2024 16:07:38 GMT-0700 (Mountain Standard Time)
// by running `wrangler types`

interface Env {
	METADATA_KV: KVNamespace;
	WORKOS_CLIENT_ID: string;
	WORKOS_API_KEY: string;
	WORKOS_REDIRECT_URI: string;
	WORKOS_COOKIE_PASSWORD: string;
	PORT: string;
	DATABASE_URL: string;
	CLOUDFLARE_ACCOUNT_ID: string;
	R2_ACCESS_KEY_ID: string;
	R2_SECRET_ACCESS_KEY: string;
	IMAGES_BUCKET: R2Bucket;
	BACKEND_URL: string;
	HYPERDRIVE: Hyperdrive;
	OPENAI_API_KEY: string;
	NOTION_CLIENT_ID: string;
	NOTION_CLIENT_SECRET: string;
	ENCRYPTED_TOKENS: KVNamespace;
	NODE_ENV: string;
	STRIPE_CHECKOUT_KEY: string;
	STRIPE_WEBHOOK_SECRET: string;
	STATIC_ASSETS: Fetcher
}

// global .env
declare global {
	namespace NodeJS {
		interface ProcessEnv extends Env {}
	}
}
