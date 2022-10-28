import React, { useRef } from 'react';
import * as S from './styles';
import Icons from '../../Icons';

const Input = ({ label, name, type, placeholder, value, opcional }) => {
  const [state, setState] = React.useState(false);
  const [focus, setFocus] = React.useState(false);

  const inputRef = useRef(null);

  function handleClick() {
    setState(!state);
  }

  return (
    <>
      <S.Label htmlFor={name}>
        {' '}
        {label} <S.Opicional>{opcional ? `(Opicional)` : ''}</S.Opicional>{' '}
      </S.Label>
      <S.Box>
        <S.Input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          ref={inputRef}
          id={name}
          name={name}
          type={!state ? type : 'text'}
          value={value}
          placeholder={placeholder}
        />
        <S.BoxIcon isFocused={focus} onClick={handleClick}>
          <Icons label={label} state={state} />
        </S.BoxIcon>
      </S.Box>
    </>
  );
};

export default Input;
