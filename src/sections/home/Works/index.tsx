import type { FC } from 'react';

import { Section } from '@/components/Section';
import { getProjects } from '@/lib/projects';

import { WorkCard } from './components/WorkCard';

export const Works: FC = () => {
    const projects = getProjects();

    return (
        <Section
            id="works"
            itemsCount={projects.length}
        >
            {projects.map((project, index) => (
                <WorkCard
                    key={project.slug}
                    project={project}
                    number={index + 1}
                />
            ))}
        </Section>
    );
};
