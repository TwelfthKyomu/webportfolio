import React from 'react';

const Header: React.FC = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<a className="active" href="/public">Главная</a>
				<a href="/public">Проекты</a>
			</nav>
		</header>
	);
};

export default Header;
