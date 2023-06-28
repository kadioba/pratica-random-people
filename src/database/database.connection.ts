import dotenv from 'dotenv';
import pg, { PoolConfig } from 'pg';

dotenv.config();

const Pool = pg.Pool;

const configDatabase: PoolConfig = {
    connectionString: process.env.DATABASE_URL as string,
};

export const db = new Pool(configDatabase);