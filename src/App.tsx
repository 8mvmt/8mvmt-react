import React from 'react';
import './App.css';
import { StarknetProvider, getInstalledInjectedConnectors } from '@starknet-react/core';
import TestPage from './pages/test';
import Testnet from './pages/testnet';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const connectors = getInstalledInjectedConnectors();

  return (

    <StarknetProvider connectors={connectors}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TestPage />} />
          <Route path='/testnet' element={<Testnet />} />
          
        </Routes>
      </BrowserRouter>
    </StarknetProvider>
    
  );
}

export default App;
