import React from 'react';
import * as S from './styles';
import Icons from '../../Icons';

const Input = ({ label, name, type, placeholder, value }) => {
  const [state, setState] = React.useState(false);
  function handleClick() {
    setState(!state);
  }
  console.log(state);
  return (
    <>
      <S.Label htmlFor={name}> {label} </S.Label>
      <S.Box>
        <S.Input
          id={name}
          name={name}
          type={state ? "text" : "password"}
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
