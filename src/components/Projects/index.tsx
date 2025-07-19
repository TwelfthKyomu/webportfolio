'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo } from 'react';

import SVG from '@/lib/SVG';
import { useProjectContext } from '@/сontext/ProjectContext';
import DefaultImage from '@public/default-image.jpg';
import { Skeleton } from 'components/ui/Skeleton';

const Projects = () => {
    const { isLoading, filteredProjects = [] } = useProjectContext();

    return (
        <Skeleton isLoading={ isLoading }>
            <div className="projects">
                { filteredProjects?.map((project, index) => (
                    <div
                        key={ project.id }
                        className={ `project project-${index}` }
                    >
                        <h1 className="project__title">{ project.name }</h1>
                        { project.htmlUrl && (
                            <Link
                                className="project__link"
                                target="_blank"
                                href={ project.htmlUrl }
                            >
                                <SVG name="transition" />
                            </Link>
                        ) }
                        <h6 className="project__subtitle">{ project.description }</h6>
                        <Image
                            src={ project.imagePath || DefaultImage }
                            alt={ project.name }
                            className="project__image"
                            priority
                            width="100"
                            height="100"
                            sizes="(max-width: 300px) 100vw, 300px"
                        />
                    </div>
                )) }
            </div>
        </Skeleton>
    );
};

export default memo(Projects);
