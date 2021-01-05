import React from 'react';

import { FiUser, FiLock } from 'react-icons/fi';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  // FaArrowLeft,
} from 'react-icons/fa';

import {
  Container,
  Content,
  SignInImg,
  Figure,
  Form,
  RegisterForm,
  RememberCheckBox,
  SocialLogin,
  FacebookButton,
  LinkedinButton,
  GoogleButton,
} from './styles';

import SignInImage from '../../assets/signInImage.jpg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <SignInImg>
        {/* <FaArrowLeft size={20} /> */}
        <Figure>
          <img src={SignInImage} alt="SignInFigure" />
        </Figure>
        <a href="/signup">Crie uma conta</a>
      </SignInImg>
      <Form>
        <h2>Entrar</h2>
        <RegisterForm>
          <div>
            <FiUser size={20} />
            <input placeholder="Usuário" />
          </div>
          <div>
            <FiLock size={20} />
            <input type="password" placeholder="Senha" />
          </div>
          <RememberCheckBox>
            <input type="checkbox" />
            <span>Lembrar</span>
          </RememberCheckBox>
          <a href="/signup">Esqueci minha senha</a>
          <button type="submit">Entrar</button>
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

export default SignIn;
