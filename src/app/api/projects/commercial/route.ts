import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

import { NextRequest, NextResponse } from 'next/server';

import { query } from '@/lib/db';
import { CommercialProjectT } from '@/types/project.types';

export async function GET(): Promise<NextResponse> {
	try {
		const result = await query<CommercialProjectT>(
			`SELECT 
				id,
				name,
				description,
				image_path as imagePath,
				technologies,
				html_url as htmlUrl,
				created_at as createdAt,
				updated_at as updatedAt
			FROM commercial_projects 
			ORDER BY created_at DESC`
		);

		// Преобразуем данные в правильный формат
		const projects = result.rows.map(project => ({
			...project,
			technologies: typeof project.technologies === 'string' 
				? JSON.parse(project.technologies) 
				: project.technologies,
			createdAt: new Date(project.createdAt),
			updatedAt: new Date(project.updatedAt)
		}));

		return NextResponse.json(projects);
	} catch (error) {
		return NextResponse.json({error: (error as Error).message}, {status: 500});
	}
}

export async function POST(request: NextRequest): Promise<NextResponse> {
	try {
		const formData = await request.formData();
		const title = formData.get('name') as string;
		const description = formData.get('description') as string;
		const technologies = JSON.parse(formData.get('technologies') as string);
		const htmlUrl = formData.get('htmlUrl') as string | null;
		const image = formData.get('image') as File | null;

		let imagePath: string | null = null;

		if (image) {
			const bytes = await image.arrayBuffer();
			const buffer = new Uint8Array(bytes);

			const fileName = `${Date.now()}-${image.name}`;
			const uploadDir = path.join(process.cwd(), 'public', 'images', 'projects');

			await mkdir(uploadDir, { recursive: true });

			await writeFile(path.join(uploadDir, fileName), buffer);
			imagePath = `/images/projects/${fileName}`;
		}

		const result = await query<CommercialProjectT>(
			`INSERT INTO commercial_projects 
			(name, description, image_path, technologies, html_url) 
			VALUES (?, ?, ?, ?, ?) 
			RETURNING id, name, description, image_path as imagePath, technologies, html_url as htmlUrl, 
			created_at as createdAt, updated_at as updatedAt`,
			[title, description, imagePath, JSON.stringify(technologies), htmlUrl]
		);

		if (!result.rows[0]) {
			throw new Error('Failed to create project: No data returned');
		}

		return NextResponse.json(result.rows[0]);
	} catch (error) {
		return NextResponse.json({error: (error as Error).message}, {status: 500});
	}
}
