import type { FC } from 'react';

import type { MockName } from '@/constants/mocks';

import { MOCK_SCREENS } from './constants';
import styles from './ScreenshotMock.module.scss';

type PropsT = {
    name: MockName;
    fullWidth: boolean;
};

export const ScreenshotMock: FC<PropsT> = (props) => {
    const { name, fullWidth } = props;
    const MockScreen = MOCK_SCREENS[name];

    return (
        <>
            <MockScreen fullWidth={fullWidth} />
            <span className={styles.label}>иллюстрация</span>
        </>
    );
};
