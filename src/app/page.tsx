import React from 'react';

import { ProjectProvider } from '@/сontext/ProjectContext';
import Menu from 'components/Menu';
import Profile from 'components/Profile';
import Projects from 'components/Projects';
import Divider from 'components/ui/Divider';

const Home = () => {
    return (
        <main>
            <Profile />
            <Divider />
            <ProjectProvider>
                <Menu />
                <Projects/>
            </ProjectProvider>
        </main>
    );
};

export default Home;
