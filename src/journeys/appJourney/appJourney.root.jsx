import React from 'react';
import { Provider } from 'react-redux';
import configStore from 'store';
import RouteCollection from 'journeys/appJourney/routes';
import history from './history';

const store = configStore(history);

const Root = () => (
  <Provider store={store} key="provider">
    <RouteCollection history={history} />
  </Provider>
);

export default Root;
