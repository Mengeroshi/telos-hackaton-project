import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './pages/Home/Home';
import {InputPage} from './pages/InputPage/InputPage.jsx';
import {ContextProvider} from  './context/Context.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <InputPage />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


