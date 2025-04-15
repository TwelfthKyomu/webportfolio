'use client'
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

import DefaultImage from "@public/default-image.jpg";
import Website from "assets/Website";
import { Skeleton } from "components/ui/Skeleton";

const Projects = () => {

    return (
        <Skeleton>
            <div className="projects">
               { /*{ filteredProjects.map((project, index) => (*/ }
               { /*     <div key={ project.id } className={ `project project-${index}` }>*/ }
               { /*         <h1 className="project__title">{ project.name }</h1>*/ }
               { /*         { project.htmlUrl && (*/ }
               { /*             <Link className="project__link" target="_blank" href={ project.htmlUrl }>*/ }
               { /*                 <Website/>*/ }
               { /*             </Link>*/ }
               { /*         ) }*/ }
               { /*         <h6 className="project__subtitle">*/ }
               { /*             { project.description }*/ }
               { /*         </h6>*/ }
               { /*         <Image*/ }
               { /*             src={ project.imagePath || DefaultImage }*/ }
               { /*             alt={ project.name }*/ }
               { /*             className={ `project__image ${project.imagePath ? '' : 'default-image'}` }*/ }
               { /*             fill*/ }
               { /*             priority*/ }
               { /*             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"*/ }
               { /*         />*/ }
               { /*     </div>*/ }
               { /* )) }*/ }
            </div>
        </Skeleton>
    );
};

export default memo(Projects);