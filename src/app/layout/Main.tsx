import React, { FC } from "react";

import MenuButton from "@/components/MenuButton";
import Profile from "@/components/profile";
import Projects from "@/components/projects";

const Main: FC = () => {
	return (
		<>
			<Profile/>
			<MenuButton/>
			<Projects />
		</>
	);
};

export default Main;