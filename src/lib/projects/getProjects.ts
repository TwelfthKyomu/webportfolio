import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import { cache } from 'react';
import * as z from 'zod';

import { projectSchema } from './schema';
import type { Project } from './types';

const PROJECTS_DIR = path.join(process.cwd(), 'src/content/projects');

function readProject(slug: string): Project {
    const file = path.join(PROJECTS_DIR, slug, 'index.md');
    const result = projectSchema.safeParse(matter(readFileSync(file, 'utf8')).data);

    if (!result.success) {
        throw new Error(`src/content/projects/${slug}/index.md\n${z.prettifyError(result.error)}`);
    }

    return { slug, ...result.data };
}

function readProjects() {
    return readdirSync(PROJECTS_DIR, { withFileTypes: true })
        .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
        .map((entry) => readProject(entry.name))
        .sort((first, second) => first.order - second.order);
}

export const getProjects = cache(readProjects);
