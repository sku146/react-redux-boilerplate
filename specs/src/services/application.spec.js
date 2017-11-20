import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { apiMiddleware } from 'redux-api-middleware';
import * as services from 'services/application';
import { ApiError } from './helpers';

describe('Application services', () => {
  describe('getOptionFieldList', () => {
    const createMockStore = configureMockStore([thunk, apiMiddleware]);
    let store;

    beforeEach(() => {
      store = createMockStore({});
    });

    afterEach(() => {
      nock.cleanAll();
    });

    it('should dispatch a EXAMPLE_LIST_REQUEST and EXAMPLE_LIST_RESPONSE in case of success', () => {
      nock('http://localhost:3000')
        .get('/exampleList')
        .reply(200, { response: ['test'] });

      const expectedActions = [
        {
          meta: undefined,
          payload: undefined,
          type: 'EXAMPLE_LIST_REQUEST',
        },
        {
          meta: undefined,
          payload: {
            response: ['test'],
          },
          type: 'EXAMPLE_LIST_RESPONSE',
        },
      ];

      return store.dispatch(services.fetchExampleList()).then(() => { // eslint-disable-line
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should dispatch a EXAMPLE_LIST_REQUEST and EXAMPLE_LIST_FAILURE in case of error', () => {
      nock('http://localhost:3000')
        .get('/exampleList')
        .reply(400);

      const expectedActions = [
        {
          meta: undefined,
          payload: undefined,
          type: 'EXAMPLE_LIST_REQUEST',
        },
        {
          meta: undefined,
          error: true,
          payload: new ApiError('400 - Bad Request'),
          type: 'EXAMPLE_LIST_FAILURE',
        },
      ];

      return store.dispatch(services.fetchExampleList()).then(() => { // eslint-disable-line
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
