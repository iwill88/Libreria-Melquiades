import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {DarkModeProvider} from './context/DarkModeContext';
import { CarritoProvider } from './context/CarritoContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <DarkModeProvider>
  {/*<CarritoProvider>*/}
    <App/>
    {/*</CarritoProvider>*/}
  </DarkModeProvider>
);
