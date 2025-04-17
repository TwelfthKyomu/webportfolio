import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Screen from '@public/images/projects/1734264474521-zetter.png';
import { Skeleton } from 'components/ui/Skeleton';

const Projects = () => {
    return (
        <Skeleton>
            <div className="projects">
                <Link href={ '' } className="project">
                    <h3 className="project__title">Zetter</h3>
                    <p className="project__description">
                        Zetter — современная платформа для управления задачами, созданная для
                        продуктивной и слаженной работы в команде. С её помощью вы легко организуете
                        рабочие процессы, распределите приоритеты и будете всегда в курсе текущего
                        статуса проекта.
                    </p>
                    <span className="project__subtitle">
                        От личного трекера задач до комплексного планирования в больших командах —
                        Zetter адаптируется под ваши цели. Интуитивный интерфейс, гибкие доски и
                        мощные инструменты аналитики делают рабочий процесс прозрачным и
                        управляемым.
                        От личного трекера задач до комплексного планирования в больших командах —
                        Zetter адаптируется под ваши цели. Интуитивный интерфейс, гибкие доски и
                        мощные инструменты аналитики делают рабочий процесс прозрачным и
                        управляемым.
                        От личного трекера задач до комплексного планирования в больших командах —
                        Zetter адаптируется под ваши цели. Интуитивный интерфейс, гибкие доски и
                        мощные инструменты аналитики делают рабочий процесс прозрачным и
                        управляемым.
                    </span>
                    <Image
                        className="project__image"
                        src={ Screen }
                        alt=""
                    />
                </Link>
            </div>
        </Skeleton>
    );
};

export default Projects;
