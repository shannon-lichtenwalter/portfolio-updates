import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import NotFoundRoute from './Components/NotFoundRoute/NotFoundRoute';


class App extends React.Component {
  render () {
    return (
    <main>
      <Nav />
      <Switch>
        <Route
          exact
          path={'/'}
          component={LandingPage}
        />
        <Route
          component={NotFoundRoute}
        />
      </Switch>
    </main>
  );
  }
}

export default App;
