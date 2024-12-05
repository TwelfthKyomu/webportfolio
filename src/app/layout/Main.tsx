import React, { FC } from "react";

import MenuButton from "@/components/MenuButton";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import { FilterProvider } from "@/context/filter";
import { GithubProvider } from "@/context/github";

const Main: FC = () => {
	return (
		<GithubProvider>
			<Profile/>
			<FilterProvider>
				<MenuButton/>
				<Projects />
			</FilterProvider>
		</GithubProvider>
	);
};

export default Main;