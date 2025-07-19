import React, { FC } from 'react';

import Link from "components/ui/Link";

const Header: FC = () => {
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
