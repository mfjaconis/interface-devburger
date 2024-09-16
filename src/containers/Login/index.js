import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LoginImg from "../../assets/login-image.svg";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components";
import { useUser } from "../../hooks/UserContext";
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

export function Login() {
	const history = useHistory();

	const { putUserData } = useUser();

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
		const { data } = await toast.promise(
			api.post(
				"sessions",
				{
					email: clientData.email,
					password: clientData.password,
				},
				{ validateStatus: () => true },
			),
			{
				pending: "Verificando os dados informados",
				success: "Seja bem-vindo(a)",
				error: "Verifique seu e-mail e senha",
			},
		);

		putUserData(data);

		setTimeout(() => {
			history.push("/");
		}, 1000);
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
					<Link style={{ color: "white" }} to="/cadastro">
						Criar conta
					</Link>
				</SignInLink>
			</ContainerItens>
		</Container>
	);
}
