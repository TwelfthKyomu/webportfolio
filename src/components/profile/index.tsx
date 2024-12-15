'use client'
import Image from "next/image";
import React, { FC } from "react";

import profileAvatar from 'assets/avatar.jpeg';

const Profile: FC = () => {
    return (
        <div className="profile">
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
        </div>
    );
};

export default Profile;