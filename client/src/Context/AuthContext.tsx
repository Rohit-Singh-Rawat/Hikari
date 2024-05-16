import axios from 'axios';
import React, { createContext, useContext, useState, useEffect, FC, ReactNode } from 'react';

export interface User {
	id: string;
	username: string;
	email: string;
	FullName: string;
}

interface AuthContextValue {
	authenticated: boolean;
	user: User | null;
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	token: string | null;
	isLoading: boolean;
	isError: boolean;
	login: (token: string) => void;
	logout: () => void;
}

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
	const [authenticated, setAuthenticated] = useState<boolean>(false);
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	console.log('object');
	useEffect(() => {
		console.log('objecefwewet');
	}, []);
	useEffect(() => {
		console.log('hi');
		const verifyToken = async () => {
			setIsLoading(true);
			try {
				const token = localStorage.getItem('token');
				if (token) {
					const response = await axios({
						method: 'get',
						url: 'http://127.0.0.1:8787/api/v1/user/me',
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token}`,
						},
					});
					if (
						response?.status === 200 ||
						response?.data?.Authenticated ||
						response?.data?.message === 'User is Authenticated'
					) {
						setAuthenticated(true);
						setUser(response.data.user);
						localStorage.setItem('User', JSON.stringify(response.data.user));
					} else {
						setAuthenticated(false);
					}
				} else {
					setAuthenticated(false);
				}
			} catch (error) {
				console.error('Error verifying token:', error);
				setIsError(true);
				setAuthenticated(false);
			} finally {
				setIsLoading(false);
			}
		};

		verifyToken();
	}, []);
	console.log('qobject');
	const login = (token: string) => {
		localStorage.setItem('token', token);
		setToken(token);
	};

	const logout = () => {
		localStorage.removeItem('token');
		setToken(null);
		setUser(null);
		setAuthenticated(false);
	};

	const contextValue: AuthContextValue = {
		authenticated,
		setAuthenticated,
		token,
		user,
		isLoading,
		isError,
		login,
		logout,
	};

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
