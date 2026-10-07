import { notFound } from 'next/navigation';
import type { FC } from 'react';

import { Screenshot } from '@/components/Screenshot';
import { getCasePage } from '@/lib/projects';
import { CaseHeader } from '@/sections/case/CaseHeader';
import { CaseHero } from '@/sections/case/CaseHero';
import { Gallery } from '@/sections/case/Gallery';
import { NextCase } from '@/sections/case/NextCase';
import { Story } from '@/sections/case/Story';

export { generateMetadata } from './lib/generateMetadata';
export { generateStaticParams } from './lib/generateStaticParams';

export const dynamicParams = false;

const CasePage: FC<PageProps<'/cases/[slug]'>> = async (props) => {
    const { slug } = await props.params;
    const pageData = getCasePage(slug);

    if (!pageData) notFound();

    const { project, caseStudy, number, worksCount, nextLink } = pageData;

    return (
        <>
            <CaseHeader
                number={number}
                worksCount={worksCount}
            />
            <main>
                <CaseHero
                    number={number}
                    project={project}
                    caseStudy={caseStudy}
                />
                <div className="container">
                    <Screenshot
                        screen={project.cover}
                        alt={project.title}
                        fullWidth
                    />
                </div>
                <Story caseStudy={caseStudy} />
                <Gallery
                    projectTitle={project.title}
                    screens={caseStudy.gallery}
                />
                <NextCase link={nextLink} />
            </main>
        </>
    );
};

export default CasePage;
