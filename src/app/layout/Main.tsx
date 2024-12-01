import React, { FC } from "react";

import MenuButton from "@/components/MenuButton";
import Profile from "@/components/profile";

const Main: FC = () => {
	return (
		<>
			<Profile/>
			<MenuButton/>
		</>
	);
};

export default Main;