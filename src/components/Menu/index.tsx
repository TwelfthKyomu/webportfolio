'use client';
import clsx from 'clsx';
import type { FC } from 'react';

import { MenuItems } from '@/constants/menu';
import { useProjectContext } from '@/сontext/ProjectContext';

const Menu: FC = () => {
    const { handleFilterChange, currentFilter } = useProjectContext();
    const buttonClassName = (isActive: boolean) =>
        clsx('menu__item', { 'menu__item--active': isActive });

    return (
        <div className="menu">
            <ul className="menu__list">
                { Object.values(MenuItems).map((item, index) => (
                    <li key={ index }>
                        <button
                            className={ buttonClassName(currentFilter === item) }
                            onClick={ () => handleFilterChange(item) }
                        >
                            { item }
                        </button>
                    </li>
                )) }
            </ul>
        </div>
    );
};

export default Menu;
