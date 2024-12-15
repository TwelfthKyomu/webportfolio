'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

type QueryProviderPropsT = {
	children: ReactNode;
}
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: 1,
			staleTime: 5 * 60 * 1000,
		},
	},
});

const QueryProvider = (props: QueryProviderPropsT) => {
	const {children} = props;

	return (
		<QueryClientProvider client={ queryClient }>
			{ children }
		</QueryClientProvider>
	);
};

export default QueryProvider;