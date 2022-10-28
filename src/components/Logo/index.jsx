import React from 'react';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import * as S from './styles';

const Logo = () => {
  const { pathname } = useLocation();
  return (
    <S.BoxLogo>
      <Link to="/">
        <S.TitleH1>EducDev</S.TitleH1>

        {pathname.length === 1 ? (
          <S.Title>
            Bem vindo <S.Span>ao</S.Span>
          </S.Title>
        ) : (
          ''
        )}

        <LogoSvg />
      </Link>
    </S.BoxLogo>
  );
};

export default Logo;
