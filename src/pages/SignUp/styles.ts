import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: calc(100% - 30px);
  max-width: 100%;
`;

export const Content = styled.div`
  display: flex;
  padding: 85px 0px 0px 160px;
`;
export const Form = styled.form`
  margin-left: 65px;
  margin-right: 40px;

  h2 {
    margin-bottom: 33px;
    font-size: 36px;
  }
`;

export const RegisterForm = styled.form`
  svg {
    position: absolute;
    margin-top: 5px;
  }

  input {
    width: 62%;
    display: block;
    margin-bottom: 25px;
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

  button {
    height: 50px;
    background: #6dabe4;
    color: #fff;
    border: none;
    padding: 15px 39px;
    border-radius: 5px;
    margin-top: 25px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -o-border-radius: 5px;
    -ms-border-radius: 5px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#6dabe4')};
    }
  }
`;

export const TermsCheckBox = styled.div`
  display: flex;
  margin-right: 190px;
  padding-top: 12px;

  input {
    width: 1em;
    margin-top: 2px;
  }

  span {
    margin-left: 8px;
    font-size: 13.8px;
  }

  a {
    margin-left: 5px;
    font-size: 13.8px;
    color: #222;
  }
`;

export const SignUpImg = styled.div`
  text-align: center;

  a {
    font-size: 14px;
    color: #222;
  }
`;

export const Figure = styled.div`
  margin-bottom: 25px;
`;
