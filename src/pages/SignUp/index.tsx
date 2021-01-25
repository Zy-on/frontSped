import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiUser, FiLock, FiMail } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';
import schema from './validation';
// import api from '../../services/api';

import {
  Container,
  Content,
  GoBackButton,
  Figure,
  Form,
  RegisterForm,
  NameError,
  EmailError,
  PasswordError,
  ConfirmPasswordError,
  TermsError,
  TermsCheckBox,
  SignUpImg,
} from './styles';

import SignUpImage from '../../assets/signUpImage.jpg';

type Inputs = {
  nome: string;
  email: string;
  senha: string;
  repetirSenha: string;
  termos: boolean;
};

function goHome() {
  window.history.go(-1);
}

const SignUp: React.FC = () => {
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
        <Form>
          <h2>Cadastrar</h2>
          <RegisterForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <FiUser size={20} />
              <input name="nome" ref={register} placeholder="Nome completo" />
              <NameError>{errors.nome?.message}</NameError>
            </div>
            <div>
              <FiMail size={20} />
              <input name="email" ref={register} placeholder="E-mail" />
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
            <div>
              <FiLock size={20} />
              <input
                name="repetirSenha"
                ref={register}
                type="password"
                placeholder="Repita sua senha"
              />
              <ConfirmPasswordError>
                {errors.repetirSenha?.message}
              </ConfirmPasswordError>
            </div>
            <TermsCheckBox>
              <input name="termos" ref={register} type="checkbox" />
              <span>Eu concordo com os</span>
              <a href="/">Termos de serviço</a>
            </TermsCheckBox>
            <TermsError>{errors.termos?.message}</TermsError>
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
};

export default SignUp;
