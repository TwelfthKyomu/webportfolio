import React from 'react';

import Menu from 'components/Menu';
import Divider from 'components/ui/Divider';

import Profile from '../components/Profile';

const Home = () => {
    return (
        <main>
            <Profile />
            <Divider />
            <Menu />
        </main>
    );
};

export default Home;
