import dotenv from 'dotenv';

dotenv.config();

const POSTGRES_USER = process.env.POSTGRES_USER || '';
const POSTGRES_DB = process.env.POSTGRES_DB || '';
const POSTGRES_HOST = process.env.POSTGRES_HOST || '';
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || '';
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 5555;

export const config = {
    SERVER_PORT,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_HOST,
    POSTGRES_PASSWORD
};
