'use client';
import { FC } from "react";

import { MenuItems } from "@/constants/menu";
import { useProjectContext } from "@/context/ProjectContext";

const MenuButton: FC = () => {
    const { handleFilterChange, currentFilter } = useProjectContext();

    return (
        <div className="menu">
            <ul className="menu__list">
                { Object.values(MenuItems).map((item, index) => (
                    <li
                        key={ index }
                        className={ `menu__item ${currentFilter === item ? 'menu__item--active' : ''}` }
                        onClick={ () => handleFilterChange(item) }
                    >
                        { item }
                    </li>
                )) }
            </ul>
        </div>
    );
};

export default MenuButton;