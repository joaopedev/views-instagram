import { AxiosError } from 'axios';
import { SignIn } from "../types/auth-data";
import { api } from '../api';
import { IErrorResponse } from '../interface/Feedeback';

export const loginRequest = async (data: SignIn) => {
	try {
		const response = await api.post('/login', data);
		return response;
	} catch (error) {
		const errors = error as AxiosError;
		let errorMessage = '';
		if (errors.response && errors.response.data instanceof Error) {
			errorMessage = (errors.response.data as IErrorResponse).message;
			throw new Error(errorMessage);
		} else {
			throw new Error(errors?.message);
		}
	}
};