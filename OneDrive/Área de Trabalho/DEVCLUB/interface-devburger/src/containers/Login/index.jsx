import { Container, LeftContainer, RightContainer, Title, Form, InputContainer } from './styles'
import Logo from '../../assets/logo-login.svg'
import { Button } from '../../components/Button'

export function Login() {

    return (
        <>
            <Container>
                <LeftContainer>
                    <img src={Logo} alt="logo-devburger" />
                </LeftContainer>
                <RightContainer>
                    <Title>
                        Olá, seja bem vindo ao <span>Dev Burguer!</span>
                        <br />
                        Acesse com seu <span>Login e senha.</span>
                    </Title>
                    <Form>
                        <InputContainer>
                            <label>E-mail</label>
                            <input type="email" />
                        </InputContainer>
                        <InputContainer>
                            <label>Senha</label>
                            <input type="password" />

                        </InputContainer>
                        <Button>Entrar</Button>
                    </Form>
                    <p>Não possui conta? <a>
                        Clique aqui.  </a></p>
                </RightContainer>
            </Container>
        </>
    )
}