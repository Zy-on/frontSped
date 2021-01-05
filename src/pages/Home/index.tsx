import React from 'react';

import SpedIcon from '../../assets/spedIcon.jpg';

// eslint-disable-next-line object-curly-newline
import { Container, Content, Header, SpedImage, LoginButton } from './styles';

const Home: React.FC = () => (
  <Container>
    <Content>
      <Header>
        <SpedImage>
          <SpedImage>
            <img src={SpedIcon} alt="SpedIconInHeader" />
          </SpedImage>
        </SpedImage>
        <LoginButton>
          <a href="/signin">Entrar</a>
        </LoginButton>
        <a href="/signup">Crie sua conta</a>
      </Header>
    </Content>
  </Container>
);

export default Home;
