import React from 'react';

import Link from "components/ui/Link";

const Header: React.FC = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<Link href="/">Главная</Link>
				<Link href="/public">Проекты</Link>
			</nav>
		</header>
	);
};

export default Header;
