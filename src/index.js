import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {DarkModeProvider} from './context/DarkModeContext';
/*import './firebase/index.firebase.js'*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <DarkModeProvider>
 
    <App/>
  </DarkModeProvider>
);
