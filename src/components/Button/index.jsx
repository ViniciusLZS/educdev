import React from 'react';
import * as S from './styles';

const Button = ({props, children}) => {
  return <S.Button {...props}>{children}</S.Button>;
};

export default Button;
