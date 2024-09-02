import React from "react";

import LoginImg from "../../assets/login-image.svg";
import Logo from "../../assets/logo.svg";

import {
	Button,
	Container,
	ContainerItens,
	Input,
	Label,
	LoginImage,
	SignInLink,
} from "./styles";

function Login() {
	return (
		<Container>
			<LoginImage src={LoginImg} alt="login-image" />
			<ContainerItens>
				<img src={Logo} alt="Logo-code-burger" />

				<h2>Login</h2>

				<Label>E-mail</Label>
				<Input />

				<Label>Senha</Label>
				<Input />

				<Button> Entrar </Button>

				<SignInLink>
					Não possui conta?{" "}
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a>Criar conta</a>
				</SignInLink>
			</ContainerItens>
		</Container>
	);
}

export default Login;
