import React from 'react';
import Header from './componentes/Header';
import styled from 'styled-components';

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
      { /*<Button>Teste</Button>
        <ButtonMod>Teste 2</ButtonMod>*/ }
    </AppContainer>
  );
}

export default App;