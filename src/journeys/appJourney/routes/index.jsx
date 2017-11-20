import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import LandingPage from 'containers/landing-page';
import { Navigate } from 'constants';

export default () => (
  <Router>
    <div className="page-wrapper">
      <Container>
        <Switch>
          <Route exact path={Navigate.ROOT} component={LandingPage} />
        </Switch>
      </Container>
    </div>
  </Router>
);
