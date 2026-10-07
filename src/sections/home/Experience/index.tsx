import type { FC } from 'react';

import { LiveWord } from '@/components/LiveWord';
import { Section } from '@/components/Section';
import { EXPERIENCE } from '@/constants/experience';

import styles from './Experience.module.scss';

export const Experience: FC = () => {
    return (
        <Section
            id="experience"
            itemsCount={EXPERIENCE.length}
        >
            <ol className={styles.list}>
                {EXPERIENCE.map((item, index) => (
                    <li
                        key={index}
                        className={styles.row}
                    >
                        <p className={styles.years}>
                            <LiveWord
                                text={item.from}
                                preset="year"
                            />
                            <span className={styles.separator}>—</span>
                            <LiveWord
                                text={item.to}
                                preset="year"
                            />
                        </p>
                        <div>
                            <h3 className={styles.company}>{item.company}</h3>
                            <p className={styles.role}>{item.role}</p>
                        </div>
                        <p className={styles.description}>
                            {item.description}
                            {item.stack && <span className={styles.stack}>{item.stack}</span>}
                        </p>
                    </li>
                ))}
            </ol>
        </Section>
    );
};
