import { ReactNode } from "react";
import { SignIn } from "../types/auth-data";

export interface IAuthProvider {
	children: ReactNode;
}

export interface IPayload {
	email: string;
	id: string;
	tipo_usuario: number;
	cras: number;
	exp: number;
	iat: number;
	name: string;
	cpf: string;
	telefone: string;
	endereco: {
		rua: string;
		numero: number;
		bairro: string;
	};
	data_nascimento: string;
	message: string;
	updated_at: Date;
}

export interface IAuthContext {
	isAuthenticated: boolean;
	token: string | null;
	payload: IPayload | null;
	setPayload: React.Dispatch<React.SetStateAction<IPayload | null>>;
	signIn: (data: SignIn) => Promise<void>;
	signOut: () => Promise<void>;
}
