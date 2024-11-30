import React from 'react';

const Header: React.FC = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<a href="/public">Главная</a>
				<a href="/public">Проекты</a>
				<a href="/public">Контакты</a>
			</nav>
		</header>
	);
};

export default Header;
