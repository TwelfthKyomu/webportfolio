'use client';

import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ProjectProvider } from '@/context/ProjectContext';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: 1,
            staleTime: 300000, // 5 минут
            cacheTime: 3600000, // 1 час
        },
    },
});

export function Providers({children}: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ProjectProvider>
                {children}
            </ProjectProvider>
        </QueryClientProvider>
    );
}
