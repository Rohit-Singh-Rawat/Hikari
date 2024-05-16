import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthProvider } from './Context/AuthContext';
import { Router } from './Router';
function App() {
	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<Router/>
				</AuthProvider>
			</QueryClientProvider>
		</>
	);
}

export default App;
