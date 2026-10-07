import type { FC } from 'react';

import { Approach } from '@/sections/home/Approach';
import { Contact } from '@/sections/home/Contact';
import { Experience } from '@/sections/home/Experience';
import { Header } from '@/sections/home/Header';
import { Hero } from '@/sections/home/Hero';
import { Preloader } from '@/sections/home/Preloader';
import { Stack } from '@/sections/home/Stack';
import { Works } from '@/sections/home/Works';

const HomePage: FC = () => {
    return (
        <>
            <Preloader />
            <Header />
            <main>
                <Hero />
                <Works />
                <Experience />
                <Approach />
                <Stack />
                <Contact />
            </main>
        </>
    );
};

export default HomePage;
