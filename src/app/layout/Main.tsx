import React, { FC } from "react";

import MenuButton from "@/components/MenuButton";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import { ProjectProvider } from "@/context/ProjectContext";
import QueryProvider from "@/providers/QueryProvider";

const Main: FC = () => {

	return (
		<QueryProvider>
			<Profile/>
			<ProjectProvider>
				<MenuButton/>
				<Projects/>
			</ProjectProvider>
		</QueryProvider>
	);
};

export default Main;