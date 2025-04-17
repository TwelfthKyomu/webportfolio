import type { FC } from 'react';

const Menu: FC = () => {
    return (
        <div className="menu">
            <ul className="menu__list">
                <li>
                    <button>Все проекты</button>
                </li>
                <li>
                    <button>Мои проекты</button>
                </li>
                <li>
                    <button>Обновления</button>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
