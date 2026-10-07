import type { FC } from 'react';

import styles from './StackGroup.module.scss';

type PropsT = {
    title: string;
    technologies: string[];
};

export const StackGroup: FC<PropsT> = (props) => {
    const { title, technologies } = props;

    return (
        <div className={styles.group}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.technologies}>
                {technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>
        </div>
    );
};
