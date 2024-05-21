import { useQuery } from '@tanstack/react-query';
import axios from '../axios/axios';
import { useNavigate } from 'react-router-dom';

export interface User {
	id: string;
	username: string;
	email: string;
	FullName: string;
}

export default function useUser() {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');

	if (token) {
		const {
			data: user,
			isLoading,
			isError,
		} = useQuery({
			queryKey: ['authUser'],
			queryFn: async () => {
				try {
					const response = await axios({
						method: 'get',
						url: '/user/me',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token}`,
						},
					});

					if (!response.data.user) {
						throw new Error('No user data found');
					}

					localStorage.setItem('User', JSON.stringify(response.data.user));
					return response.data;
				} catch (error) {
					throw new Error('Failed to fetch user data');
					navigate('/signup');
				}
			},
			staleTime: Infinity,
			retry: false,
		});

		return { user, isLoading, isError };
	} else {
		return { user: null, isLoading: false };
	}
}
