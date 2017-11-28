import React from 'react';
import { Provider } from 'react-redux';
import configStore from 'store';
import RouteCollection from './routes';
import history from './history';
import rootSaga from 'sagas';

const debug = process.env.NODE_ENV === 'development';
const store = configStore(history, debug);
store.runSaga(rootSaga);

const Root = () => (
  <Provider store={store} key="provider">
    <RouteCollection history={history} />
  </Provider>
);

export default Root;
