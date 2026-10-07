import type { FC } from 'react';

import { LiveWord } from '@/components/LiveWord';
import { Section } from '@/components/Section';
import { CORE_STACK, LEARNING_NOW, STACK_COUNT, STACK_GROUPS } from '@/constants/stack';

import { StackGroup } from './components/StackGroup';
import styles from './Stack.module.scss';

export const Stack: FC = () => {
    return (
        <Section
            id="stack"
            itemsCount={STACK_COUNT}
        >
            <ul className={styles.core}>
                {CORE_STACK.map((technology) => (
                    <li key={technology}>
                        <LiveWord
                            text={technology}
                            preset="word"
                        />
                    </li>
                ))}
            </ul>
            <div className={styles.groups}>
                {STACK_GROUPS.map((group) => (
                    <StackGroup
                        key={group.title}
                        title={group.title}
                        technologies={group.technologies}
                    />
                ))}
            </div>
            <p className={styles.note}>Сейчас изучаю: {LEARNING_NOW}</p>
        </Section>
    );
};
