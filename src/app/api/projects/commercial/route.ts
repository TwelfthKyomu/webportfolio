import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { writeFile } from 'fs/promises';
import path from 'path';
import { CommercialProject, CreateCommercialProjectDTO } from '@/types/project.types';

export async function GET(): Promise<NextResponse> {
  try {
    const result = await query<CommercialProject>('SELECT * FROM commercial_projects ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const technologies = JSON.parse(formData.get('technologies') as string);
    const liveUrl = formData.get('liveUrl') as string | null;
    const image = formData.get('image') as File | null;

    let imagePath: string | null = null;
    if (image) {
      const bytes = await image.arrayBuffer();
      const buffer = new Uint8Array(bytes);
      
      // Создаем уникальное имя файла
      const fileName = `${Date.now()}-${image.name}`;
      const uploadDir = path.join(process.cwd(), 'public', 'images', 'projects');
      
      // Сохраняем файл
      await writeFile(path.join(uploadDir, fileName), buffer);
      imagePath = `/images/projects/${fileName}`;
    }

    const result = await query<CommercialProject>(
      'INSERT INTO commercial_projects (title, description, image_path, technologies, live_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, imagePath, technologies, liveUrl]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
