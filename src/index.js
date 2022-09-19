import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import img from './thisIsFinal.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}>
      <App />
    </div>
  </React.StrictMode>
);


