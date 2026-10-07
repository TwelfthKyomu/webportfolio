import type { FC } from 'react';

import { Section } from '@/components/Section';
import { APPROACH } from '@/constants/approach';
import { toTwoDigits } from '@/lib/format';

import styles from './Approach.module.scss';

export const Approach: FC = () => {
    return (
        <Section
            id="approach"
            className={styles.approach}
        >
            <p className={styles.statement}>
                <span>{APPROACH.statement}</span>
            </p>
            <div className={styles.principles}>
                {APPROACH.principles.map((principle, index) => (
                    <div
                        key={index}
                        className={styles.principle}
                    >
                        <span>/{toTwoDigits(index + 1)}</span>
                        <h3>{principle.title}</h3>
                        <p>{principle.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};
