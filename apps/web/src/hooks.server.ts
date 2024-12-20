import { env } from '$env/dynamic/private';

process.env.PAYLOAD_SECRET = env.PAYLOAD_SECRET;
process.env.DATABASE_URI = env.DATABASE_URI;
