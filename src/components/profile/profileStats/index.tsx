import React from "react";

type ProfileStatProps = {
	count: number;
	label: string;
}

const ProfileStat: React.FC<ProfileStatProps> = ({count, label}) => (
	<div className="profile__stat">
		<span className="profile__stat-count">{count}</span>
		<span className="profile__stat-label">{label}</span>
	</div>
);

export default ProfileStat;