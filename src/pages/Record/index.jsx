import React from 'react';
import Input from '../../components/Form/Input';
import Button from '../../components/Button';
import * as S from './styles';
import Logo from '../../components/Logo';

const Record = ({ nome }) => {
  const [select, setSelect] = React.useState('');
  nome = 'Vinícius';

  return (
    <S.Container>
      <Logo />
      <S.Content>
        <S.WarningContainer>
          <S.Title>
            Olá, {nome}
            <S.Span>!</S.Span>
          </S.Title>
          <S.Paragraph>
            Antes de comerçarmos, vamos completar seu cadastro?
          </S.Paragraph>
          <S.Warning>
            Você pode alterar essas informações a qualquer momento.
          </S.Warning>
        </S.WarningContainer>

        <S.Form>
          <Input type="text" label="Apelido" name="apelido" opcional="true" />

          <S.label>Área</S.label>
          <S.Select
            value={select}
            onChange={({ target }) => setSelect(target.value)}
            id="area"
            >
            <option disabled value="">
              Selecione
            </option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Full-Stack">Full-Stack</option>
          </S.Select>
          <Button>Pronto!</Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
};

export default Record;
