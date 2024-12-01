import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import { projectData } from "@/test/commercialProjects";
import DefaultImage from 'assets/default-image.jpg';
import Website from "assets/Website";

const Projects: FC = () => {
	return (
		<div className="projects">
			<article className="project">
				<h1 className="project__title">{projectData.title}</h1>
				{projectData.websiteLink && (
					<Link className="project__link" href={projectData.websiteLink}>
						<Website/>
					</Link>
				)}
				{projectData.subtitle && (
					<h6 className="project__subtitle">
						{projectData.subtitle}
					</h6>
				)}
				<ul className="project__technologies">
					{projectData.technologies?.map((tech, index) => (
						<li key={index}>
							<span>{tech.name}</span>
							{tech.items && (
								<ul className="project__technologies--content">
									{tech.items.map((item, itemIndex) => (
										<li key={itemIndex}>{item}</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
				<Image
					src={projectData.image || DefaultImage}
					alt={projectData.title}
					className="project__image"
				/>
			</article>
		</div>
	);
}

export default Projects;