import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from './utils/translations/i18next';
import { createBrowserHistory } from 'history';

import './index.scss';
import App from './app/App';
import RootCustomProvider from './components/RootCustomProvider/RootCustomProvider';
import storage from './utils/storage';
import { setAuthorizationHeader } from './api/client';
import configureStore from './store';

const accessToken = storage.get('auth');
const userData = storage.get('user_data');
setAuthorizationHeader(accessToken);
const history = createBrowserHistory();
const store = configureStore({ auth: !!accessToken, userData }, { history });

ReactDOM.render(
  <RootCustomProvider store={store} history={history}>
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  </RootCustomProvider>,
  document.getElementById('root')
);
