'use client'
import Image from "next/image";
import React, { FC, useMemo } from "react";

import ProfileStat from "@/components/profile/profileStats";
import profileAvatar from 'assets/avatar.jpeg';

const Profile: FC = () => {
    // const { repositories } = useGithubContext();

   /* const stats = useMemo(() => [
        { count: 2, label: "Коммерческих проектов" },
        { count: 2, label: "Доработок" },
        { count: repositories.length, label: "Своих проектов" }
    ], [repositories.length]);*/

    return (
        <section className="profile">
            <div className="profile__avatar">
                <Image
                    src={ profileAvatar }
                    alt="avatar"
                    priority
                />
            </div>
            <div className="profile__info">
                <h1>Паутов Даниил</h1>
                <h3>&#171;Twelfth&#187;</h3>
                <h2>Frontend Developer</h2>
            </div>
            { /*<div className="profile__stats">
                { stats.map((stat, index) => (
                    <ProfileStat
                        key={ index }
                        count={ stat.count }
                        label={ stat.label }
                    />
                )) }
            </div>*/ }
        </section>
    );
};

export default Profile;