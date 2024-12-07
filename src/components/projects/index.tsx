'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useRepository } from "@/hooks/github/useRepositiory";
import { repositoryT } from "@/types/github";
import DefaultImage from "@public/default-image.jpg";
import Website from "assets/Website";
import { Skeleton } from "components/ui/Skeleton";

const Projects = () => {
	const {repositories, isLoading} = useRepository();

	return (
		<Skeleton isLoading={ isLoading }>
			<div className="projects">
				{ repositories.map((repo: repositoryT, index) => (
					<div key={ repo.id } className={ `project project-${index}` }>
						<h1 className="project__title">{ repo.name }</h1>
						{ repo.html_url && (
							<Link className="project__link" target="_blank" href={ repo.html_url }>
								<Website/>
							</Link>
						) }
						<h6 className="project__subtitle">
							{ repo.description }
						</h6>
						<ul className="project__technologies">
						</ul>
						<Image src={ DefaultImage } alt={ repo.name } className="project__image" priority/>
					</div>
				)) }
			</div>
		</Skeleton>
	);
};

export default Projects;