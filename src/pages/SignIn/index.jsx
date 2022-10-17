import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Form/Input';
import * as S from './styles';

const SignIn = () => {
  return (
    <S.Content>
      <S.Title>Login</S.Title>
      <S.Form>
        <Input label="E-mail" type="email" name="email" placeholder='E-mail' />
        <Input label='Senha' type='password' name='password' placeholder='Password' />
        <Button>Entrar</Button>
      </S.Form>
    </S.Content>
  );
};

export default SignIn;
