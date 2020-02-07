import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';
import * as exampleAction from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleAction.clicaBotaoRequest());
    dispatch({
      type: 'BOTAO_CLICADO2',
    });
  }

  return (
    <>
      <Container>
        <Title>
          LOGIN
          <small>Oie</small>
        </Title>
        <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
        <button type="submit" onClick={handleClick}>
          Enviar
        </button>
      </Container>
    </>
  );
}
