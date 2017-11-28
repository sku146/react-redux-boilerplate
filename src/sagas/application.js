// @flow
import { takeLatest, call, put } from 'redux-saga/effects';
import { ApplicationActions } from 'actions';
import { ApplicationServices } from 'services';
import {
  ActionTypes,
} from 'constants';

export function* getExampleList(): Generator<*, *, *> {
  try {
    const data = yield call(ApplicationServices.fetchExampleList);
    yield put(ApplicationActions.exampleListResponse(data));
  } catch (error) {
    yield put(ApplicationActions.exampleListFailure(error));
  }
}

export function* watchList(): Generator<*, *, *> {
  yield takeLatest(ActionTypes.EXAMPLE_LIST_REQUEST, getExampleList);
}
