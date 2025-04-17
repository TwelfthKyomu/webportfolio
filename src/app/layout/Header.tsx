import React from 'react';

import Link from "components/ui/Link";

const Header: React.FC = () => {
	return (
		<header>
			<nav>
				<Link href="/">Главная</Link>
				<Link href="/public">Проекты</Link>
			</nav>
		</header>
	);
};

export default Header;
