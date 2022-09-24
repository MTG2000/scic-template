import React from 'react';
import ReactDOM from 'react-dom/client';
import Wrapper from './utils/Wrapper';
import './styles/index.css';
import App from './App';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>
);

