import styled from "styled-components";
import { Button } from "./../../../components/Button/index";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
        gap: 25px;
        background-color: #565656;
        border-radius: 10px;
        padding: 30px;
    }
`;

export const Label = styled.p`
    color: #fff;
    font-size: 14px;
    margin-bottom: 3px;
`;

export const Input = styled.input`
        height: 40px;
        border-radius: 8px;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
        border: none;
        width: 100%;
        min-width: 280px;
        padding-left: 10px;
`;

export const ButtonStyles = styled(Button)`
    width: 100%;
    margin-top: 30px;
`;

export const LabelUpload = styled.label`
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    border: 1px dashed #fff;
    border-radius: 5px;
    padding: 10px;
    gap: 10px;
    text-transform: uppercase;

    input {
        opacity: 0;
        width: 1px;
    }
`;
