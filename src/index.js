import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import App from './App';

//components
import { Preloader } from './components';
//

import { Provider } from 'react-redux';
import Store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <Provider store={Store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);