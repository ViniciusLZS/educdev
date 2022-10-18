import React from 'react';
import * as S from './styles';

const Input = ({ label, name, type, placeholder, value }) => {
  return (
    <>
      <S.Label htmlFor={name}> {label} </S.Label>
      <S.Input id={name} name={name} type={type} value={value} placeholder={placeholder} />
    </>
  );
};

export default Input;
