import React from 'react';
import { Link } from 'react-router-dom';
import BackArrow from '../../components/BackArrow';
import Button from '../../components/Button';
import Input from '../../components/Form/Input';
import * as S from './styles';

const SignIn = () => {
  return (
    <S.Content>
      <BackArrow />
      <S.Title>Login</S.Title>
      <S.Form>
        <Input label="E-mail" type="email" name="email" placeholder="E-mail" />
        <Input
          label="Senha"
          type="password"
          name="password"
          placeholder="Password"
        />
        <Link to="/esqueci">
          <S.Span>Esqueci minha senha!</S.Span>
        </Link>
        <Button>Entrar</Button>

        <S.Link>
          Não tem uma conta?{' '}
          <Link to="/cadastro">
            <S.Span>Registri-se</S.Span>
          </Link>
        </S.Link>
      </S.Form>
    </S.Content>
  );
};

export default SignIn;
