import clsx from 'clsx';
import type { FC } from 'react';

import { ScreenshotMock } from '@/components/ScreenshotMock';
import type { Screen } from '@/lib/projects';

import { ScreenshotImage } from './components/ScreenshotImage';
import styles from './Screenshot.module.scss';

type PropsT = {
    screen: Screen;
    alt: string;
    fullWidth?: boolean;
    className?: string;
};

export const Screenshot: FC<PropsT> = (props) => {
    const { screen, alt, fullWidth = false, className } = props;
    const isMock = screen.type === 'mock';

    return (
        <div
            className={clsx(
                styles.screenshot,
                isMock && styles[screen.name],
                fullWidth && styles.fullWidth,
                className
            )}
            role={isMock ? 'img' : undefined}
            aria-label={isMock ? alt : undefined}
        >
            {isMock ? (
                <ScreenshotMock
                    name={screen.name}
                    fullWidth={fullWidth}
                />
            ) : (
                <ScreenshotImage
                    src={screen.src}
                    alt={alt}
                    sizes={fullWidth ? '100vw' : '(max-width: 900px) 100vw, 60vw'}
                />
            )}
        </div>
    );
};
