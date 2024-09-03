import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import LoginImg from "../../assets/login-image.svg";
import Logo from "../../assets/logo.svg";
import Button from "../../components/Button";
import api from "../../services/api";
import {
	Container,
	ContainerItens,
	ErrorMessage,
	Input,
	Label,
	LoginImage,
	SignInLink,
} from "./styles";

function Login() {
	const schema = Yup.object({
		email: Yup.string()
			.email("Digite um e-mail válido")
			.required("O e-mail é obrigatório"),
		password: Yup.string()
			.required("A senha é obrigatória")
			.min(6, "A senha deve conter pelo menos 6 dígitos"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (clientData) => {
		const response = await api.post("sessions", {
			email: clientData.email,
			password: clientData.password,
		});

		console.log(response);
	};

	return (
		<Container>
			<LoginImage src={LoginImg} alt="login-image" />
			<ContainerItens>
				<img src={Logo} alt="Logo-code-burger" />

				<h2>Login</h2>

				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Label>E-mail</Label>
					<Input
						type="email"
						{...register("email")}
						error={errors.email?.message}
					/>
					<ErrorMessage>{errors.email?.message}</ErrorMessage>

					<Label>Senha</Label>
					<Input
						type="password"
						{...register("password")}
						error={errors.password?.message}
					/>
					<ErrorMessage>{errors.password?.message}</ErrorMessage>

					<Button style={{ marginTop: 75, marginBottom: 25 }} type="submit">
						Entrar
					</Button>
				</form>

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
