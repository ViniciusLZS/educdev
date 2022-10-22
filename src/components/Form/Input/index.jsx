import React from 'react';
import * as S from './styles';
import Icons from '../../Icons';

const Input = ({ label, name, type, placeholder, value, opcional }) => {
  const [state, setState] = React.useState(false);
  function handleClick() {
    setState(!state);
  }
  console.log(state);
  return (
    <>
      <S.Label htmlFor={name}>
        {' '}
        {label} <S.Opicional>{opcional ? `(Opicional)` : ''}</S.Opicional>{' '}
      </S.Label>
      <S.Box>
        <S.Input
          id={name}
          name={name}
          type={!state ? type : 'text'}
          value={value}
          placeholder={placeholder}
        />
        <S.BoxIcon onClick={handleClick}>
          <Icons label={label} state={state} />
        </S.BoxIcon>
      </S.Box>
    </>
  );
};

export default Input;
