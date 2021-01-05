import React from 'react';
import { FiUser, FiLock, FiMail } from 'react-icons/fi';

import {
  Container,
  Content,
  Figure,
  Form,
  RegisterForm,
  TermsCheckBox,
  SignUpImg,
} from './styles';

import SignUpImage from '../../assets/signUpImage.jpg';

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <Form>
        <h2>Cadastrar</h2>
        <RegisterForm>
          <div>
            <FiUser size={20} />
            <input placeholder="Nome completo" />
          </div>
          <div>
            <FiMail size={20} />
            <input placeholder="E-mail" />
          </div>
          <div>
            <FiLock size={20} />
            <input type="password" placeholder="Senha" />
          </div>
          <div>
            <FiLock size={20} />
            <input type="password" placeholder="Repita sua senha" />
          </div>
          <TermsCheckBox>
            <input type="checkbox" />
            <span>Eu concordo com os</span>
            <a href="/">Termos de serviço</a>
          </TermsCheckBox>
          <button type="submit">Registrar</button>
        </RegisterForm>
      </Form>
      <SignUpImg>
        <Figure>
          <img src={SignUpImage} alt="SignUpFigure" />
        </Figure>

        <a href="/signin">Ja tenho cadastro</a>
      </SignUpImg>
    </Content>
  </Container>
);

export default SignUp;
