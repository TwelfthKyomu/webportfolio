import path from 'path';

import Database from 'better-sqlite3';
import type { Database as DatabaseType } from 'better-sqlite3';

const dbPath = path.join(process.cwd(), 'portfolio.db');
const db: DatabaseType = new Database(dbPath);

interface QueryResult<T> {
    rows: T[];
}

export function query<T>(sql: string, params: any[] = []): QueryResult<T> {
    try {
        const stmt = db.prepare(sql);
        const result = stmt.all(...params) as T[];
        return { rows: result };
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
}

export async function initDatabase(): Promise<void> {
    try {
        db.exec(`
            CREATE TABLE IF NOT EXISTS commercial_projects (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT,
                image_path TEXT,
                technologies TEXT,
                live_url TEXT,
                created_at DATETIME DEFAULT (datetime('now')),
                updated_at DATETIME DEFAULT (datetime('now'))
            )
        `);

        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    }
}

// Вызываем инициализацию при импорте
initDatabase().catch(console.error);