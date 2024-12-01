import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import image1 from "assets/avatar.jpeg"
import DefaultImage from 'assets/default-image.jpg';
import Website from "assets/Website";

const Projects: FC = () => {
	return (
		<div className="projects">
			<div className="project">
				<h1 className="project__title">Работы</h1>
				<Link className="project__link" href='//'>
					<Website />
				</Link>
				<h6 className="project__subtitle">
					Разработан на React
				</h6>
				<div className="project__social">
					<Link href="/github"></Link>
				</div>
				<ul className="project__technologies">
					<li>
						<span>Технологии</span>
						<ul className="project__technologies--content">
							<li>qq</li>
						</ul>
					</li>
					<li>Базы данных</li>
					<li>Анимация</li>
				</ul>
				<Image src={image1 || DefaultImage} alt="Проект"/>
			</div>
		</div>
	);
}

export default Projects;