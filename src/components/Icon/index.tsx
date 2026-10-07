import type { FC } from 'react';

import { ICON_PATHS, type IconName } from './constants';

type PropsT = {
    name: IconName;
    size?: number;
};

export const Icon: FC<PropsT> = (props) => {
    const { name, size = 18 } = props;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d={ICON_PATHS[name]} />
        </svg>
    );
};
