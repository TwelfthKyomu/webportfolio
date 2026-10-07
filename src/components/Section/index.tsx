import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

import { LiveLetters } from '@/components/LiveLetters';
import { SECTIONS, type SectionId } from '@/constants/sections';
import { toTwoDigits } from '@/lib/format';

import styles from './Section.module.scss';

type PropsT = {
    id: SectionId;
    itemsCount?: number;
    className?: string;
    children: ReactNode;
};

export const Section: FC<PropsT> = (props) => {
    const { id, itemsCount, className, children } = props;
    const index = SECTIONS.findIndex((section) => section.id === id);

    return (
        <section
            id={id}
            className={clsx(styles.section, className)}
        >
            <div className="container">
                <div className={styles.heading}>
                    <span className={styles.number}>{toTwoDigits(index + 1)}</span>
                    <h2 className={styles.title}>
                        <LiveLetters
                            text={SECTIONS[index].label}
                            preset="title"
                        />
                    </h2>
                    {itemsCount !== undefined && (
                        <span className={styles.count}>({toTwoDigits(itemsCount)})</span>
                    )}
                </div>
                {children}
            </div>
        </section>
    );
};
