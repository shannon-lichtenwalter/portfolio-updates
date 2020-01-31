import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Content from './Components/Content/Content';
import NotFoundRoute from './Components/NotFoundRoute/NotFoundRoute';

class App extends React.Component {
  render () {
    return (
    <main>
      <Nav />
      {/* <LandingPage />
      <AboutPage />
      <Projects />
      <Contact /> */}

      <Switch>
        <Route
          exact
          path={'/'}
          component={Content}
        />
        {/* <Route
          exact
          path={'/about'}
          component={AboutPage}
        /> */}
        {/* <Route
          exact
          path={'/projects'}
          component={Projects}
        />
        <Route
          exact
          path={'/contact'}
          component={Contact} */}
        {/* /> */}
        <Route
          component={NotFoundRoute}
        />
      </Switch>
    </main>
  );
  }
}

export default App;
