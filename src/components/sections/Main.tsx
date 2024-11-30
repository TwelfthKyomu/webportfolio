import Image from "next/image";
import React, { FC } from "react";

import profileAvatar from 'assets/avatar.jpeg';

const Main:FC = () => {
	return(
		<div className="profile-avatar">
			<Image src={profileAvatar} alt="" />
		</div>
	)
}

export default Main;