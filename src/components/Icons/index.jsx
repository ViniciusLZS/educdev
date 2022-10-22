import React from 'react';
import { ReactComponent as Usuario } from '../../assets/usuario-icon.svg';
import { ReactComponent as Email } from '../../assets/email-icon.svg';
import { ReactComponent as Senha } from '../../assets/lock-icon.svg';
import { ReactComponent as ClosedEye } from '../../assets/closed-eye-icon.svg';
import { ReactComponent as OpenEye } from '../../assets/open-eye-icon.svg';
import * as S from './styles';

const Icons = ({ label, state }) => {

  switch (label) {
    case 'Usuário': case 'Apelido':
      return <Usuario />;

    case 'E-mail':
      return <Email />;

    case 'Senha':
      return (
        <>
          <Senha />
          {state ? (
            <S.Icon>
              <OpenEye />
            </S.Icon>
          ) : (
            <S.Icon>
              <ClosedEye />
            </S.Icon>
          )}
        </>
      );
    default:
  }
};

export default Icons;
