import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import * as S from './styles';

const Home = () => {
  return (
    <S.Content>
      <S.BoxLogo>
        <S.Title>
          Bem vindo <S.Span>ao</S.Span>
        </S.Title>
        <Link to="/">
          <Logo />
        </Link>
      </S.BoxLogo>

      <S.BoxLog>
        <S.ContentLog>
          <S.Paragraph>Se já possui uma conta!</S.Paragraph>
          <Link to="/login">
            <S.LinkLog>Login</S.LinkLog>
            <Arrow />
          </Link>
        </S.ContentLog>

        <S.ContentLog>
          <S.Paragraph>Não possui uma conta?</S.Paragraph>
          <Link to="/cadastro">
            <S.LinkLog>Cadastre-se</S.LinkLog>
            <Arrow />
          </Link>
        </S.ContentLog>
      </S.BoxLog>
    </S.Content>
  );
};

export default Home;
