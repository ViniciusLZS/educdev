import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/arrow-icon.svg';
import * as S from './styles';

const SignInAndUp = () => {
  return (
    <>
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
    </>
  );
};

export default SignInAndUp;
