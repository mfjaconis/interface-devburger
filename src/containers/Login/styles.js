import styled from "styled-components";
import BackgroundImage from "../../assets/bg.svg";

export const Container = styled.div`
 height: 100vh;
 width: 100vw;
 background-image: url('${BackgroundImage}');
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const ContainerItens = styled.div`
    height: 80%;
    padding: 25px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #373737;
    border-radius: 0 10px 10px 0;

    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #fff;
        text-align: center;
        margin-top: 100px;
    }

    form {
        display: flex;
        flex-direction: column;
    }
`;

export const LoginImage = styled.img`
    height: 80%;
`;

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #fff;
    margin-top: 28px;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 391px;
    height: 38px;
    background-color: #fff;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    border: ${(props) => (props.error ? "2px solid #cc1717;" : "none")};
    padding-left: 10px;
`;

export const Button = styled.button`
    width: 182px;
    height: 36px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    background-color: #9758a6;
    border-radius: 20px;
    border: none;
    margin-top: 75px;
    margin-bottom: 25px;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
`;

export const SignInLink = styled.p`
    font-size: 14px;
    line-height: 16px;
    font-weight: 300;
    font-style: normal;
    color: #fff;

    a {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const ErrorMessage = styled.p`
    margin-top: 5px;
    font-weight: bold;
    font-style: normal;
    font-size: 14px;
    line-height: 16px;
    color: #cc1717;
`;
