import createBrowserHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';

export default (process.env.NODE_ENV === 'development') ?
  createHashHistory({
    hashType: 'noslash',
  }) : createBrowserHistory();
