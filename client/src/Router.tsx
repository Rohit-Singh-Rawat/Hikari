import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Blog from './pages/Blog';

import Home from './pages/Home';
import NewStory from './pages/NewStory';
import UserProfile from './pages/UserProfile';
import Search from './pages/Search';
import EditBlog from './pages/EditBlog';
import { useAuth } from './Context/AuthContext';
export const Router = () => {
  const {isLoading}= useAuth()
  if(isLoading){
    return <>Loading</>
  }
	return (
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
				<Route
					path='/search'
					element={<Search />}
				/>{' '}
				<Route
					path='/:id/edit'
					element={<EditBlog />}
				/>
				<Route
					path='/:username'
					element={<UserProfile />}
				/>
			</Routes>
		</BrowserRouter>
	);
};
