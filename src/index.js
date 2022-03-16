import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ContextProvider} from  './context/Context.jsx';
import {App} from './Routes/App.jsx'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


