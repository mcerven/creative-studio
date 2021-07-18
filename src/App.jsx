import React from 'react';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Main } from './components/Main';

export default function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  position: relative;
`;