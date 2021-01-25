import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiUser, FiLock } from 'react-icons/fi';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaArrowLeft,
} from 'react-icons/fa';

import schema from './validation';

import {
  Container,
  Content,
  GoBackButton,
  SignInImg,
  Figure,
  Form,
  RegisterForm,
  EmailError,
  PasswordError,
  SignInButton,
  RememberCheckBox,
  SocialLogin,
  FacebookButton,
  LinkedinButton,
  GoogleButton,
} from './styles';

import SignInImage from '../../assets/signInImage.jpg';

type Inputs = {
  email: string;
  senha: string;
};

function goHome() {
  window.history.go(-1);
}

const SignIn: React.FC = () => {
  // eslint-disable-next-line object-curly-newline
  const { register, handleSubmit, errors } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  // eslint-disable-next-line arrow-parens
  const onSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <Content>
        <header>
          <div>
            <GoBackButton onClick={goHome}>
              <FaArrowLeft size={20} />
            </GoBackButton>
          </div>
        </header>
        <SignInImg>
          <Figure>
            <img src={SignInImage} alt="SignInFigure" />
          </Figure>
          <a href="/signup">Crie uma conta</a>
        </SignInImg>
        <Form>
          <h2>Entrar</h2>
          <RegisterForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <FiUser size={20} />
              <input name="email" ref={register} placeholder="Usuário" />
              <EmailError>{errors.email?.message}</EmailError>
            </div>
            <div>
              <FiLock size={20} />
              <input
                name="senha"
                ref={register}
                type="password"
                placeholder="Senha"
              />
              <PasswordError>{errors.senha?.message}</PasswordError>
            </div>
            <RememberCheckBox>
              <input type="checkbox" />
              <span>Lembrar</span>
            </RememberCheckBox>
            <a href="/signup">Esqueci minha senha</a>
            <SignInButton>
              <button type="submit">Entrar</button>
            </SignInButton>
          </RegisterForm>
          <SocialLogin>
            <span>Ou entre com</span>
            <FacebookButton>
              <FaFacebookF color="white" />
            </FacebookButton>
            <LinkedinButton>
              <FaLinkedinIn color="white" />
            </LinkedinButton>
            <GoogleButton>
              <FaGoogle color="white" />
            </GoogleButton>
          </SocialLogin>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
