import clsx from 'clsx';
import type { FC } from 'react';

import { Screenshot } from '@/components/Screenshot';
import type { Screen } from '@/lib/projects';

import styles from './Gallery.module.scss';

type PropsT = {
    projectTitle: string;
    screens: Screen[];
};

export const Gallery: FC<PropsT> = (props) => {
    const { projectTitle, screens } = props;

    if (screens.length === 0) return null;

    return (
        <section
            className={clsx('container', styles.gallery)}
            aria-label="Скриншоты"
        >
            {screens.map((screen, index) => (
                <Screenshot
                    key={index}
                    screen={screen}
                    alt={`${projectTitle}: экран ${index + 1}`}
                />
            ))}
        </section>
    );
};
