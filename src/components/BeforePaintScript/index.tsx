import type { FC } from 'react';

import { BEFORE_PAINT_SCRIPT } from './constants';

export const BeforePaintScript: FC = () => {
    return <script dangerouslySetInnerHTML={{ __html: BEFORE_PAINT_SCRIPT }} />;
};
