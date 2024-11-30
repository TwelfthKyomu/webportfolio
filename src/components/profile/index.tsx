import Image from "next/image";
import React from "react";

import ProfileStat from "@/components/profile/profileStats";
import profileAvatar from 'assets/avatar.jpeg';

const Profile: React.FC = () => {

    const stats = [
	    { count: 2, label: "Коммерческих проектов" },
	    { count: 2, label: "Доработок" },
        { count: 5, label: "Своих проектов" }
    ];

    return (
        <section className="profile">
            <div className="profile__avatar">
                <Image
                    src={profileAvatar}
                    alt="avatar"
                    priority
                />
            </div>
            <div className="profile__info">
                <h1>Паутов Даниил</h1>
                <h5>&#171;Twelfth&#187;</h5>
                <h3>Frontend Developer</h3>
            </div>
            <div className="profile__stats">
                {stats.map((stat, index) => (
                    <ProfileStat
                        key={index}
                        count={stat.count}
                        label={stat.label}
                    />
                ))}
            </div>
        </section>
    );
};

export default Profile;