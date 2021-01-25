import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding-top: 67px;
  padding-bottom: 87px;
  padding-left: 100px;
`;

export const Content = styled.div`
  display: flex;
`;

export const GoBackButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const SignInImg = styled.div`
  display: block;
  margin-left: 130px;
  margin-right: 60px;
  margin-top: 10px;
  text-align: center;

  a {
    font-size: 14px;
    color: #222;
  }
`;

export const Figure = styled.div`
  margin-bottom: 25px;
`;

export const Form = styled.div`
  margin-right: 90px;
  margin-left: 120px;
  font-size: 13.8px;

  h2 {
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-bottom: 33px;
    font-size: 36px;
  }
`;

export const RegisterForm = styled.form`
  margin-bottom: 10px;

  svg {
    position: absolute;
    margin-top: 5px;
  }

  input {
    flex: 1;
    display: block;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #999;
    padding: 6px 40px;
    box-sizing: border-box;
    font-size: 13.8px;

    ::-webkit-input-placeholder {
      color: #999;
    }
    :focus::-webkit-input-placeholder {
      color: ${shade(1, '#999')};
    }

    &:focus {
      border-bottom: 1px solid ${shade(1, '#999')};
    }
  }

  a {
    color: #222;
  }
`;

export const EmailError = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  color: #c53030;
`;

export const PasswordError = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  color: #c53030;
`;
export const SignInButton = styled.div`
  button {
    height: 50px;
    background: #6dabe4;
    color: #fff;
    border: none;
    padding: 15px 39px;
    border-radius: 5px;
    margin-top: 20px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    transition: background-color 0.2s;
    font-size: 13.8px;

    &:hover {
      background: ${shade(0.2, '#6dabe4')};
    }
  }
`;

export const RememberCheckBox = styled.div`
  display: flex;
  margin-right: 190px;
  margin-bottom: 50px;

  input {
    position: absolute;
    margin-top: 3px;
  }

  span {
    margin-left: 25px;
    font-size: 13.8px;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  margin-right: 110px;
`;

export const FacebookButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background: #3b5998;
  transition: 0.2s;

  svg {
    width: 19px;
    height: 19px;
    margin-top: 5px;
  }

  &:hover {
    transform: scale(1.2) perspective(1px);
  }
`;

export const LinkedinButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background: #0e76a8;
  transition: 0.2s;

  svg {
    width: 19px;
    height: 19px;
    margin-top: 5px;
  }

  &:hover {
    transform: scale(1.2) perspective(1px);
  }
`;

export const GoogleButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background: #e72734;
  transition: 0.2s;

  svg {
    width: 19px;
    height: 19px;
    margin-top: 5px;
  }

  &:hover {
    transform: scale(1.2) perspective(1px);
  }
`;
