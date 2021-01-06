import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-left: 15px;
    margin-right: 10px;
    font-size: 13.8px;
    color: #222;
  }
`;

export const SpedImage = styled.div`
  img {
    width: 120px;
    height: 80px;
  }
`;

export const LoginButton = styled.div`
  margin-left: auto;

  a {
    height: 50px;
    background: #6dabe4;
    color: #fff;
    border: none;
    padding: 15px 39px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#6dabe4')};
    }
  }
`;
