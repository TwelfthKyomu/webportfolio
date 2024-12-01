'use client';
import { FC } from "react";

import { MenuItems } from "@/constants/menu";
import { useFilter } from "@/context/filter";

const MenuButton: FC = () => {
	const {currentFilter, setFilter} = useFilter();

	return (
		<section className="menu">
			<ul className="menu__list">
				{ MenuItems.map((item, index) => (
					<li
						key={ index }
						className={ `menu__item ${currentFilter === item.id ? 'menu__item--active' : ''}` }
						onClick={ () => setFilter(item.id) }
					>
						{ item.label }
					</li>
				)) }
			</ul>
		</section>
	);
};

export default MenuButton;