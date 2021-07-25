import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n';

//Components
import Preloader from './components/Preloader/Preloader';
//

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);