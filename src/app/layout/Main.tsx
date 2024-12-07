import React, { FC } from "react";

import MenuButton from "@/components/MenuButton";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import { FilterProvider } from "@/context/FilterContext";
import QueryProvider from "@/providers/QueryProvider";

const Main: FC = () => {

	return (
		<QueryProvider>
			<Profile/>
			<FilterProvider>
				<MenuButton/>
				<Projects/>
			</FilterProvider>
		</QueryProvider>
	);
};

export default Main;