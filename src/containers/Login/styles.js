import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';
import BackgroundLogin from '../../assets/bg-login.svg';
import BackgroundHamburger from '../../assets/bg-login-hamburger.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
export const LeftContainer = styled.div`
  background-image: url('${BackgroundLogin}');
  background-size: cover;

  width: 100%;
  height: 100%;
  max-width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 50%;
  background-image: url('${BackgroundHamburger}');
  background-color: #1e1e1e;
  background-size: cover;

  p {
    color: #fff;
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-weight: 400;
  font-size: 39px;
  color: #fff;

  span {
    color: #9758a6;
    font-family: 'Road Rage', sans-serif;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600px;
    color: #fff;
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: #fff;
`;
