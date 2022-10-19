import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Logo from '../../components/Logo';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import SignInAndUp from '../SignInAndUp';
import * as S from './styles';

const Home = () => {
  return (
    <S.Content>
      <Logo />
      <Routes>
        <Route path="/" element={<SignInAndUp />} />
        <Route path="login" element={<SignIn />} />
        <Route path="cadastro" element={<SignUp />} />
      </Routes>
    </S.Content>
  );
};

export default Home;
