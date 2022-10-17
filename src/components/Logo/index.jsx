import React from 'react';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Logo = () => {
  return (
    <S.BoxLogo>
      <S.TitleH1>EducDev</S.TitleH1>
      <S.Title>
        Bem vindo <S.Span>ao</S.Span>
      </S.Title>
      <Link to="/">
        <LogoSvg />
      </Link>
    </S.BoxLogo>
  );
};

export default Logo;
