import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from 'context/stateProvider';
import reducer, { initialState } from 'context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
