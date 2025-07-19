'use client'
import type { FC} from 'react';
import React, { useEffect, useState } from 'react';

const StatsGrid: FC = () => {
    const [stats, setStats] = useState({
        projects: 0,
        commits: 0,
        experience: 0,
        technologies: 0
    });

    const calculateExperience = (startDateStr: string): number => {
        const startDate = new Date(startDateStr);
        const now = new Date();

        const diffInMs = now.getTime() - startDate.getTime();
        const msInHalfYear = 365.25 * 24 * 60 * 60 * 1000 / 2;

        const experience = diffInMs / msInHalfYear;

        return Math.floor(experience) * 0.5;
    };

    useEffect(() => {
        const animateCounter = (target: number, setter: (value: number) => void) => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setter(target);
                    clearInterval(timer);
                } else {
                    setter(Math.floor(current));
                }
            }, 30);
        };

        setTimeout(() => {
            animateCounter(12, (value) => setStats(prev => ({ ...prev, projects: value })));
        }, 200);

        setTimeout(() => {
            animateCounter(247, (value) => setStats(prev => ({ ...prev, commits: value })));
        }, 400);

        setTimeout(() => {
            const experienceValue = calculateExperience("2024-03-13");

            animateCounter(experienceValue, (value) =>
                setStats(prev => ({ ...prev, experience: value }))
            );
        }, 600);

        setTimeout(() => {
            animateCounter(15, (value) => setStats(prev => ({ ...prev, technologies: value })));
        }, 800);
    }, []);

    return (
        <div className="stats-grid">
            <div className="stats-grid__item">
                <div className="stats-grid__number">{ stats.projects }</div>
                <div className="stats-grid__label">Проектов</div>
            </div>
            <div className="stats-grid__item">
                <div className="stats-grid__number">{ stats.commits }</div>
                <div className="stats-grid__label">Коммитов</div>
            </div>
            <div className="stats-grid__item">
                <div className="stats-grid__number">{ stats.experience }+</div>
                <div className="stats-grid__label">Год опыта</div>
            </div>
            <div className="stats-grid__item">
                <div className="stats-grid__number">{ stats.technologies }</div>
                <div className="stats-grid__label">Технологий</div>
            </div>
        </div>
    );
};

export default StatsGrid;