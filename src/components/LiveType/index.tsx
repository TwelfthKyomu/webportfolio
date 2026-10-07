'use client';

import type { FC } from 'react';

import { useLiveType } from './hooks/useLiveType';

export const LiveType: FC = () => {
    useLiveType();

    return null;
};
