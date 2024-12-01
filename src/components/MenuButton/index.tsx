import { FC } from "react";

const MenuButton: FC = () => {
	return (
		<section className="menu-content">
			<ul className="menu__list">
				<li className="active">Новые</li>
				<li>Мои проекты</li>
				<li className="commercial-projects">
					Коммерческие проекты
					{/*<div className="projects-list">
						{commercialProjects.map((project) => (
							<div key={project.id} className="project-card">
								<h3>{project.name}</h3>
								<p className="role">
									{project.role === 'full-development'
										? 'Полная разработка'
										: 'Частичное участие'}
								</p>
								<div className="tasks">
									<h4>Основные задачи:</h4>
									<ul>
										{project.tasks.map((task, index) => (
											<li key={index}>{task}</li>
										))}
									</ul>
								</div>
								<div className="technologies">
									<h4>Технологии:</h4>
									<div className="tech-tags">
										{project.technologies.map((tech, index) => (
											<span key={index} className="tech-tag">{tech}</span>
										))}
									</div>
								</div>
								<p className="period">
									{project.period.start} - {project.period.end}
								</p>
							</div>
						))}
					</div>*/}
				</li>
				<li>Обновления</li>
			</ul>
		</section>
	);
}

export default MenuButton;