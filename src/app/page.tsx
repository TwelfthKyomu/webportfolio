import React from 'react';

import Menu from 'components/Menu';
import Divider from 'components/ui/Divider';

import Profile from '../components/Profile';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <main>
            <Profile />
            <Divider />
            <Menu />
            <Projects />
        </main>
    );
};

export default Home;
