import React from 'react';
import * as S from './styles';
import Icons from '../../Icons';

const Input = ({ label, name, type, placeholder, value }) => {
  return (
    <>
      <S.Label htmlFor={name}> {label} </S.Label>
      <S.Box>
        <S.Input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
        />
        <Icons label={label} />
      </S.Box>
    </>
  );
};

export default Input;
