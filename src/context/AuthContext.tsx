import axios from 'axios';
import { createContext, useEffect, useState, useCallback } from 'react';
import { IAuthContext, IAuthProvider, IPayload } from '../interface/AuthoProps';
import { jwtDecode } from 'jwt-decode';
import { SignIn } from '../types/auth-data';
import { loginRequest } from '../services/auth-request';


export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [payload, setPayload] = useState<IPayload | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	const getUserFromToken = (token: string) => {
		try {
			const decoded = jwtDecode<any>(token);
			return decoded;
		} catch (error) {
			return null;
		}
	};


	const getToken = useCallback(async () => {
		const token = localStorage.getItem('token');
		if (token) {
			const payload = getUserFromToken(token);
			if (payload) {
				setToken(token);
				setPayload(payload);
				setIsAuthenticated(true);
				axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
			} else {
				localStorage.removeItem('token');
				setToken(null);
				setPayload(null);
				setIsAuthenticated(false);
				delete axios.defaults.headers.common['Authorization'];
			}
		}
	}, []);

	useEffect(() => {
		getToken();
	}, [token, getToken]);

	const signIn = async ({ cpf, password }: SignIn) => {
		const { data } = await loginRequest({ cpf, password });
		const { token } = data;
		localStorage.setItem('token', token);
		setToken(token);
		setPayload(getUserFromToken(token));
	};

	const signOut = async () => {
		localStorage.removeItem('token');
		setToken(null);
		setPayload(null);
		delete axios.defaults.headers.common['Authorization'];
	};

	return (
		<AuthContext.Provider
			value={{
				payload,
				setPayload,
				isAuthenticated,
				signIn,
				signOut,
				token,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};