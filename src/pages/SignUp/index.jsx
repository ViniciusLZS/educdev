import React from 'react';
import BackArrow from '../../components/BackArrow';
import Button from '../../components/Button';
import Input from '../../components/Form/Input';
import * as S from './styles';

const SignUp = () => {
  return (
    <S.Content>
      <BackArrow />
      <S.Title>Cadastro</S.Title>
      <S.Form>
        <Input label="Usuário" type="text" name="usuario" placeholder="User" />
        <Input label="E-mail" type="email" name="email" placeholder="E-mail" />
        <Input
          label="Senha"
          type="password"
          name="password"
          placeholder="Password"
        />
        <Button>Cadastrar</Button>
      </S.Form>
    </S.Content>
  );
};

export default SignUp;
