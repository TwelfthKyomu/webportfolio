import React, { FC } from "react";

import MenuButton from "@/components/MenuButton";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import { GithubProvider } from "@/context/github";

const Main: FC = () => {
	return (
		<GithubProvider>
			<Profile/>
			<MenuButton/>
			<Projects />
		</GithubProvider>
	);
};

export default Main;