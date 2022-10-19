import React from 'react';
import { ReactComponent as Arrow } from '../../assets/arrow-icon.svg';
import * as S from './styles';

const BackArrow = () => {
  const handleClick = () => {
    window.history.back();
  };
  return (
    <S.Content onClick={handleClick}>
      <Arrow />
    </S.Content>
  );
};

export default BackArrow;
