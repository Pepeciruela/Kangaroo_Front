import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AdvertPage, AdvertsPage, NewAdvertPage } from '../adverts';
import { LoginPage, PrivateRoute } from '../auth';
//import { AuthProvider } from '../auth/context';
import NotFoundPage from './NotFoundPage';

function App() {
  //const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => {};
  const handleLogout = () => {};

  const authProps = { handleLogin, handleLogout };

  return (
    //<AuthProvider {...authProps}>
      <Switch>
        <PrivateRoute exact path="/adverts/new" component={NewAdvertPage} />
        <PrivateRoute exact path="/adverts/:advertId">
          <AdvertPage />
        </PrivateRoute>
        <PrivateRoute exact path="/adverts">
          <AdvertsPage />
        </PrivateRoute>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/404">
          <NotFoundPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/adverts" />
        </Route>
        <Redirect to="/404" />
      </Switch>
    //</AuthProvider>
  );
}

App.propTypes = {
  isInitiallyLogged: T.bool,
};

App.defaultProps = {
  isInitiallyLogged: false,
};

export default App;