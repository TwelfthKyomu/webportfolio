import { Pool, QueryResult, QueryResultRow } from 'pg';

const pool = new Pool({
	user: process.env.DB_USER || 'sa',
	host: process.env.DB_HOST || 'localhost',
	database: process.env.DB_NAME || 'portfolio',
	password: process.env.DB_PASSWORD || '',
	port: parseInt(process.env.DB_PORT || '5432'),
});

export async function query<T extends QueryResultRow>(text: string, params?: unknown[]): Promise<QueryResult<T>> {
	const client = await pool.connect();

	try {
		return client.query<T>(text, params);
	} finally {
		client.release();
	}
}

export async function initDatabase(): Promise<void> {
	const createTableQuery = `
        CREATE TABLE IF NOT EXISTS commercial_projects
        (
            id
            UUID
            PRIMARY
            KEY
            DEFAULT
            gen_random_uuid
        (
        ),
            title VARCHAR
        (
            255
        ) NOT NULL,
            description TEXT,
            image_path VARCHAR
        (
            500
        ),
            technologies TEXT[],
            live_url VARCHAR
        (
            255
        ),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
	`;

	try {
		await query(createTableQuery);
		console.log('Database initialized successfully');
	} catch (error) {
		console.error('Error initializing database:', error);
		throw error;
	}
}