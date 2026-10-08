import clsx from 'clsx';
import type { FC } from 'react';

import type { DemoAccess as DemoAccessData } from '@/lib/projects';

import styles from './DemoAccess.module.scss';

type PropsT = {
    demo: DemoAccessData;
    className?: string;
};

export const DemoAccess: FC<PropsT> = (props) => {
    const { demo, className } = props;

    return (
        <dl className={clsx(styles.demo, className)}>
            <dt>Гостевой вход</dt>
            <dd>{demo.login}</dd>
            <dd>{demo.password}</dd>
        </dl>
    );
};
