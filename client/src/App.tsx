import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Blog from './pages/Blog';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import NewStory from './pages/NewStory';

function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<Routes>
						<Route
							path='/signup'
							element={<Signup />}
						/>
						<Route
							path='/signin'
							element={<Signin />}
						/>
						<Route
							path='/blogs'
							element={<Home />}
						/>
						<Route
							path='/blog/:id'
							element={<Blog />}
						/>
						<Route
							path='/new-story'
							element={<NewStory />}
						/>
					</Routes>
				</BrowserRouter>
			</QueryClientProvider>
		</>
	);
}

export default App;
