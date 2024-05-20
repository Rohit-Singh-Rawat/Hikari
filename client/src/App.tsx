import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Router } from './Router';
import { SkeletonTheme } from 'react-loading-skeleton';
function App() {
	const queryClient = new QueryClient();

	return (
		<>
			<SkeletonTheme
				baseColor='#cccccc'
				highlightColor='#dfdbdb'
			>
				<QueryClientProvider client={queryClient}>
					<Router />
				</QueryClientProvider>
			</SkeletonTheme>
		</>
	);
}

export default App;
