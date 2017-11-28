// @flow
import { fork } from 'redux-saga/effects';
import { watchList } from './application';

export default function* (): Generator<*, *, *> {
  yield [
    fork(watchList),
  ];
}
