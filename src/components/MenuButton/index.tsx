import { FC } from "react";

const MenuButton: FC = () => {
	return (
		<section className="menu">
			<ul className="menu__list">
				<li className="menu__item menu__item--active">Все проекты</li>
				<li className="menu__item">Мои проекты</li>
				<li className="menu__item menu__item--commercial">Коммерческие проекты</li>
				<li className="menu__item">Обновления</li>
			</ul>
		</section>
	);
}

export default MenuButton;