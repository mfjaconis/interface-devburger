import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from "react-toastify";


import Logo from '../../assets/logo-login.svg'
import { Button } from '../../components/Button'
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer } from './styles'
import { api } from "../../services/api";

export function Register() {
    const schema = yup.object({
        name: yup.string().required('O nome é obrigatório'),
        email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
        password: yup.string().min(6, 'A senha deve conter pelo menos 6 caracteres').required('Digite uma senha'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required()
    }).required()


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        const response = await toast.promise(
            api.post('/users ', {
                name: data.name,
                email: data.email,
                password: data.password,
            }),
            {
                pending: 'Verificando seus dados...',
                success: 'Cadastro efetuado com sucesso!',
                error: 'Ops, algo deu errado! Tente novamente. '
            }
        )

        console.log(response)
    };


    return (
        <>
            <Container>
                <LeftContainer>
                    <img src={Logo} alt="logo-devburger" />
                </LeftContainer>
                <RightContainer>
                    <Title>Criar Conta</Title>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <InputContainer>
                            <label>Nome</label>
                            <input type="text" {...register("name")} />
                            <p>{errors?.name?.message}</p>
                        </InputContainer>
                        <InputContainer>
                            <label>E-mail</label>
                            <input type="email" {...register("email")} />
                            <p>{errors?.email?.message}</p>
                        </InputContainer>
                        <InputContainer>
                            <label>Senha</label>
                            <input type="password"  {...register("password")} />
                            <p>{errors?.password?.message}</p>
                        </InputContainer>
                        <InputContainer>
                            <label>Confirmar Senha</label>
                            <input type="password"  {...register("confirmPassword")} />
                            <p>{errors?.confirmPassword?.message}</p>
                        </InputContainer>
                        <Button type="submit">Entrar</Button>
                    </Form>
                    <p>Já possui conta? <a>Clique aqui.</a></p>
                </RightContainer>
            </Container>
        </>
    )
}