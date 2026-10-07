import * as z from 'zod';

import { MOCK_NAMES } from '@/constants/mocks';

export const screenSchema = z.union([
    z.enum(MOCK_NAMES).transform((name) => ({ type: 'mock' as const, name })),
    z
        .string()
        .startsWith('/')
        .transform((src) => ({ type: 'image' as const, src })),
]);

export const caseStudySchema = z.object({
    period: z.string(),
    team: z.string(),
    task: z.string(),
    approach: z.string(),
    decisions: z.array(z.object({ title: z.string(), description: z.string() })),
    code: z.object({ source: z.string(), caption: z.string().optional() }).optional(),
    result: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
    gallery: z.array(screenSchema).default([]),
});

export const projectSchema = z.object({
    order: z.number(),
    title: z.string(),
    summary: z.string(),
    stack: z.array(z.string()),
    role: z.string(),
    year: z.string(),
    cover: screenSchema,
    url: z.url().optional(),
    case: caseStudySchema.optional(),
});
