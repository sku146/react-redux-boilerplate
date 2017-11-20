/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotLoaderAppContainer } from 'react-hot-loader';
import Root from './appJourney.root';

const render = (App) => {
  ReactDOM.render(<HotLoaderAppContainer><App /></HotLoaderAppContainer>, document.getElementById('app'));
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./appJourney.root', () => {
    render(Root);
  });
}
