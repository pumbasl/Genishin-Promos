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

// //serviceWorker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../firebase-messaging-sw.js')
//   .then(function(registration) {
//     console.log('Registration successful, scope is:', registration.scope);
//   }).catch(function(err) {
//     console.log('Service worker registration failed, error:', err);
//   });
// }
// //

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