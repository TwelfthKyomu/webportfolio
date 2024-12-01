'use client'
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect } from "react";

import { useGithub } from "@/context/github";
import DefaultImage from 'assets/default-image.jpg';
import Website from "assets/Website";

const Projects: FC = () => {
	const {repositories, isLoading, error} = useGithub();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className="projects">
			{repositories.map(repo => (
				<article key={repo.id} className="project">
					<h1 className="project__title">{repo.name}</h1>
					{repo.html_url && (
						<Link className="project__link" target="_blank" href={repo.html_url}>
							<Website/>
						</Link>
					)}
					<h6 className="project__subtitle">
						{repo.description}
					</h6>
					<ul className="project__technologies">
						{repo.categorizedTech && Object.entries(repo.categorizedTech).map(
							([category, techs], index) => (
								<li key={index}>
									<span>{category}</span>
									<ul className="project__technologies--content">
										{techs.map((tech, techIndex) => (
											<li key={techIndex}>{tech}</li>
										))}
									</ul>
								</li>
							))}
					</ul>
					<Image
						src={DefaultImage}
						alt={repo.name}
						className="project__image"
					/>
				</article>
			))}
		</div>
	);
}

export default Projects;