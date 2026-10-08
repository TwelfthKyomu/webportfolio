import type { FC } from 'react';

import type { MockName } from '@/constants/mocks';

import { AdminMock } from './components/AdminMock';
import { DashboardMock } from './components/DashboardMock';
import { FeedMock } from './components/FeedMock';
import { FormMock } from './components/FormMock';
import { PlayerMock } from './components/PlayerMock';
import { ShopMock } from './components/ShopMock';
import { TableMock } from './components/TableMock';

type MockScreenProps = {
    fullWidth: boolean;
};

export const MOCK_SCREENS: Record<MockName, FC<MockScreenProps>> = {
    admin: AdminMock,
    feed: FeedMock,
    dashboard: DashboardMock,
    table: TableMock,
    form: FormMock,
    player: PlayerMock,
    shop: ShopMock,
};
