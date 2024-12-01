import { FC } from "react";

const MenuButton: FC = () => {
	return (
		<section className="menu-content">
			<ul className="menu__list">
				<li className="active">Все проекты</li>
				<li>Мои проекты</li>
				<li className="commercial-projects">Коммерческие проекты</li>
				<li>Обновления</li>
			</ul>
		</section>
	);
}

export default MenuButton;