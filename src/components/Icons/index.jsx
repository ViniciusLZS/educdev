import React from 'react';
import { ReactComponent as Usuario } from '../../assets/usuario-icon.svg';
import { ReactComponent as Email } from '../../assets/email-icon.svg';
import { ReactComponent as Senha } from '../../assets/lock-icon.svg';


const Icons = ({ label }) => {
  console.log(typeof label);

  switch (label) {
    case 'Usuario':
      return <Usuario />;

    case 'E-mail':
      return <Email />;

    case 'Senha':
      return <Senha />;
    default:
  }
};

export default Icons;
