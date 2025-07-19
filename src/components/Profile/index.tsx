'use client';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import profileAvatar from 'assets/avatar.jpeg';
import StatusBar from 'components/StatsBar';
import StatsGrid from 'components/StatsGrid';

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
            <div className="profile__name">
                <h1>Паутов</h1>
                <h1>Даниил</h1>
            </div>
            <div>
                <StatusBar />
                <StatsGrid />
            </div>
        </div>
    );
};

export default Profile;
