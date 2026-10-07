import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { toTwoDigits } from '@/lib/format';
import { getCasePage } from '@/lib/projects';

export async function generateMetadata(props: PageProps<'/cases/[slug]'>): Promise<Metadata> {
    const { slug } = await props.params;
    const pageData = getCasePage(slug);

    if (!pageData) notFound();

    return {
        title: `Кейс ${toTwoDigits(pageData.number)} — ${pageData.project.title}`,
        description: pageData.project.summary,
    };
}
