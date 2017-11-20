import { CALL_API } from 'redux-api-middleware';
import {
  EXAMPLE_LIST,
} from 'constants/api-endpoints';
import {
  ActionTypes,
} from 'constants';

export const fetchExampleList = () => ({
  [CALL_API]: {
    endpoint: EXAMPLE_LIST,
    method: 'GET',
    types: [
      ActionTypes.EXAMPLE_LIST_REQUEST,
      ActionTypes.EXAMPLE_LIST_RESPONSE,
      ActionTypes.EXAMPLE_LIST_FAILURE,
    ],
  },
});

export default {
  fetchExampleList,
};
