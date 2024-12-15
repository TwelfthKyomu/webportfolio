import path from 'path';

import Database from 'better-sqlite3';
import type { Database as DatabaseType } from 'better-sqlite3';

const dbPath = path.join(process.cwd(), 'portfolio.db');
const db: DatabaseType = new Database(dbPath);

interface QueryResult<T> {
    rows: T[];
}

type QueryParam = string | number | boolean | null | Buffer;

export function query<T>(sql: string, params: QueryParam[] = []): QueryResult<T> {
    const stmt = db.prepare(sql);
    const result = stmt.all(...params) as T[];

    return { rows: result };
}

export async function initDatabase(): Promise<void> {
    db.exec(`
        CREATE TABLE IF NOT EXISTS commercial_projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            image_path TEXT,
            technologies TEXT,
            html_url TEXT,
            created_at DATETIME DEFAULT (datetime('now')),
            updated_at DATETIME DEFAULT (datetime('now'))
        )
    `);
}

// Allow this specific console.log as it's important for initialization feedback
// eslint-disable-next-line no-console
initDatabase().then(() => console.log('Database initialized'));