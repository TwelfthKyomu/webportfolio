import type { FC } from 'react';

import { ArrowLink } from '@/components/ArrowLink';
import { PROFILE } from '@/constants/profile';

import { HeroName } from './components/HeroName';
import styles from './Hero.module.scss';

export const Hero: FC = () => {
    return (
        <section className="container">
            <div className={styles.meta}>
                <span>Портфолио / {new Date().getFullYear()}</span>
                <span>Frontend-разработка</span>
                <span>{PROFILE.location}</span>
            </div>
            <HeroName />
            <div className={styles.bottom}>
                <p className={styles.role}>
                    Frontend-
                    <br />
                    разработчик
                </p>
                <p className={styles.summary}>{PROFILE.summary}</p>
                <div className={styles.actions}>
                    <ArrowLink href="#contact">Написать мне</ArrowLink>
                </div>
            </div>
        </section>
    );
};
