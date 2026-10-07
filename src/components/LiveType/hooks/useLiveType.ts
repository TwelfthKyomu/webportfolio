import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { startLiveType } from '../lib/startLiveType';

export function useLiveType() {
    const pathname = usePathname();

    useEffect(() => startLiveType(), [pathname]);
}
