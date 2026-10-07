import Link from 'next/link';
import type { FC } from 'react';

import { Footer } from '@/components/Footer';
import { Icon } from '@/components/Icon';
import { LiveLetters } from '@/components/LiveLetters';
import type { NextCaseLink } from '@/lib/projects';

import styles from './NextCase.module.scss';

type PropsT = {
    link: NextCaseLink;
};

export const NextCase: FC<PropsT> = (props) => {
    const { link } = props;

    return (
        <div className="container">
            <Link
                className={styles.nextCase}
                href={link.href}
            >
                <span className={styles.kicker}>
                    <span>Дальше</span>
                    <span>{link.kicker}</span>
                </span>
                <span className={styles.title}>
                    <span>
                        <LiveLetters
                            text={link.title}
                            preset="cta"
                        />
                    </span>
                    <Icon
                        name="arrowRight"
                        size={120}
                    />
                </span>
            </Link>
            <Footer
                linkHref="/"
                linkLabel="На главную"
            />
        </div>
    );
};
