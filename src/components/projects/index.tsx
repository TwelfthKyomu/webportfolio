'use client'
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

import { useProjectContext } from "@/context/ProjectContext";
import DefaultImage from "@public/default-image.jpg";
import Website from "assets/Website";
import { Skeleton } from "components/ui/Skeleton";

const Projects = () => {
    const { isLoading, filteredProjects } = useProjectContext();

    return (
        <Skeleton isLoading={ isLoading }>
            <div className="projects">
               { filteredProjects.map((project, index) => (
                    <div key={ 'id' in project ? project.id : index } className={ `project project-${index}` }>
                        <h1 className="project__title">{ project.name }</h1>
                        { 'html_url' in project && project.html_url && (
                            <Link className="project__link" target="_blank" href={ project.html_url }>
                                <Website/>
                            </Link>
                        ) }
                        <h6 className="project__subtitle">
                            { project.description }
                        </h6>
                        <Image
                            src={ 'imageUrl' in project && project.imageUrl ? project.imageUrl : DefaultImage }
                            alt={ project.name }
                            className="project__image"
                            priority
                        />
                    </div>
                )) }
            </div>
        </Skeleton>
    );
};

export default memo(Projects);