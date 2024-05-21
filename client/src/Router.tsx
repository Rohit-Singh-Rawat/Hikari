import { ReactElement } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Blog from './pages/Blog';
import Home from './pages/Home';
import NewStory from './pages/NewStory';
import UserProfile from './pages/UserProfile';
import Search from './pages/Search';
import EditBlog from './pages/EditBlog';
import Stories from './pages/Stories';
import useUser from './hooks/useUser';
import Loading from './components/Loading/Loading';
import OopsPage from './components/ErrorPage';
import NotFoundPage from './pages/PageNotFound';

interface ProtectedRouteProps {
	element: ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
	const { isLoading, user, isError } = useUser();
	if (isError) return <OopsPage />;
	if (isLoading) {
		return <Loading />;
	}

	return user ? element : <Navigate to='/signin' />;
};

export const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<ProtectedRoute element={<Home />} />}
				/>
				<Route
					path='/blog/:id'
					element={<ProtectedRoute element={<Blog />} />}
				/>
				<Route
					path='/new-story'
					element={<ProtectedRoute element={<NewStory />} />}
				/>
				<Route
					path='/search'
					element={<ProtectedRoute element={<Search />} />}
				/>
				<Route
					path='/me/stories'
					element={<ProtectedRoute element={<Stories />} />}
				/>
				<Route
					path='/signup'
					element={<Signup />}
				/>
				<Route
					path='/signin'
					element={<Signin />}
				/>
				<Route
					path='/:id/edit'
					element={<ProtectedRoute element={<EditBlog />} />}
				/>
				<Route
					path='user/:username'
					element={<ProtectedRoute element={<UserProfile />} />}
				/>
				<Route
					path='*'
					element={<NotFoundPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
};
