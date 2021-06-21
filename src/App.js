import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/layout/Layout';
import Home from './containers/Home/Home';
import Todos from './containers/Todos/Todos';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';
import Logout from './containers/Auth/Logout/Logout';

const App = () => {
  const loggedIn = useSelector((state) =>
    state.firebase.auth.uid ? true : null
  );
  console.log(loggedIn);

  let routes;

  if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={Todos} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

export default App;
