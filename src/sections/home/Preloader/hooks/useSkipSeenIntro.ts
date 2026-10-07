import { useLayoutEffect } from 'react';

import { skipIntroIfSeen } from '../lib/intro';

export function useSkipSeenIntro() {
    useLayoutEffect(() => {
        skipIntroIfSeen();
    }, []);
}
