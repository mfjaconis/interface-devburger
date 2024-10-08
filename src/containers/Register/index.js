import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../../assets/logo.svg";
import RegisterImg from "../../assets/register-image.svg";
import { Button, ErrorMessage } from "../../components";
import api from "../../services/api";
import {
	Container,
	ContainerItens,
	Input,
	Label,
	RegisterImage,
	SignInLink,
} from "./styles";

export function Register() {
	const schema = Yup.object({
		name: Yup.string().required("O seu nome é obrigatório"),
		email: Yup.string()
			.email("Digite um e-mail válido")
			.required("O e-mail é obrigatório"),
		password: Yup.string()
			.required("A senha é obrigatória")
			.min(6, "A senha deve conter pelo menos 6 dígitos"),
		confirmPassword: Yup.string()
			.required("A senha é obrigatória")
			.oneOf([Yup.ref("password")], "As senhas devem ser igauis"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (clientData) => {
		try {
			const { status } = await api.post(
				"users",
				{
					name: clientData.name,
					email: clientData.email,
					password: clientData.password,
				},
				{ validateStatus: () => true },
			);
			if (status === 201 || status === 200) {
				toast.sucess("Cadastro criado com sucesso");
			} else if (status === 409) {
				toast.error("E-mail já cadastrado! Faça login para continuar");
			} else {
				throw new Error();
			}
		} catch (err) {
			toast.error("Falha no sistema! Tente novamente");
		}
	};

	return (
		<Container>
			<RegisterImage src={RegisterImg} alt="login-image" />
			<ContainerItens>
				<img src={Logo} alt="Logo-code-burger" />

				<h2>Cadastra-se</h2>

				<form noValidate onSubmit={handleSubmit(onSubmit)}>
					<Label error={errors.name?.message}>Nome</Label>
					<Input
						type="text"
						{...register("name")}
						error={errors.name?.message}
					/>
					<ErrorMessage>{errors.name?.message}</ErrorMessage>

					<Label error={errors.email?.message}>E-mail</Label>
					<Input
						type="email"
						{...register("email")}
						error={errors.email?.message}
					/>
					<ErrorMessage>{errors.email?.message}</ErrorMessage>

					<Label error={errors.password?.message}>Senha</Label>
					<Input
						type="password"
						{...register("password")}
						error={errors.password?.message}
					/>
					<ErrorMessage>{errors.password?.message}</ErrorMessage>

					<Label error={errors.confirmPassword?.message}>Confirmar senha</Label>
					<Input
						type="password"
						{...register("confirmPassword")}
						error={errors.confirmPassword?.message}
					/>
					<ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

					<Button style={{ marginTop: 25, marginBottom: 25 }} type="submit">
						Cadastrar
					</Button>
				</form>

				<SignInLink>
					Já possui conta?{" "}
					{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<Link style={{ color: "white" }} to="/login">
						Acessar Conta
					</Link>
				</SignInLink>
			</ContainerItens>
		</Container>
	);
}
