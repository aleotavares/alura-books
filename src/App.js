import React from 'react';
import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';

const AppContainer = styled.div`
    
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg,#002F52 35%, #326589 165%);
`;

const Button = styled.button`
  color: #00FF00;
`;

const ButtonMod = styled(Button)`
  color: #FF0000;
`;

function App() {

  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;