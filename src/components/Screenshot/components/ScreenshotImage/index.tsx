'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { type FC, useState } from 'react';

import styles from './ScreenshotImage.module.scss';

type PropsT = {
    src: string;
    alt: string;
    sizes: string;
};

type LoadState = 'loading' | 'loaded' | 'error';

export const ScreenshotImage: FC<PropsT> = (props) => {
    const { src, alt, sizes } = props;
    const [state, setState] = useState<LoadState>('loading');

    // картинка из кэша могла загрузиться до гидрации, и onLoad для неё уже не придёт
    const checkComplete = (image: HTMLImageElement | null) => {
        if (image?.complete) setState(image.naturalWidth > 0 ? 'loaded' : 'error');
    };

    return (
        <span className={styles.frame}>
            <span
                className={clsx(styles.placeholder, state !== 'loading' && styles.done)}
                aria-hidden="true"
            />
            <Image
                ref={checkComplete}
                className={clsx(styles.image, state === 'loaded' && styles.loaded)}
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                onLoad={() => setState('loaded')}
                onError={() => setState('error')}
            />
            {state === 'error' && <span className={styles.error}>Скриншот не загрузился</span>}
        </span>
    );
};
