'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useProjectContext } from "@/context/ProjectContext";
import { repositoryT } from "@/types/github";
import { CommercialProjectT } from "@/types/project";
import DefaultImage from "@public/default-image.jpg";
import Website from "assets/Website";
import { Skeleton } from "components/ui/Skeleton";

const Projects = () => {
    const { getFilteredProjects, isLoading } = useProjectContext();
    const filteredProjects = getFilteredProjects();

    return (
        <Skeleton isLoading={ isLoading }>
            <div className="projects">
                { filteredProjects.map((project: repositoryT | CommercialProjectT, index) => (
                    <div key={ index } className={ `project project-${index}` }>
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

export default Projects;