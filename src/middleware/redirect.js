// @flow
import { Types } from 'constants';

export default (history: Types.History) => () => (next: Types.Next) => (action: Types.Action) => {
  const { payload, meta } = action;
  const result = next(action);

  const metaRedirect = (meta && meta.redirectPath ? meta.redirectPath : '');
  const redirectPath = payload && payload.redirectPath ?
    payload.redirectPath : metaRedirect;

  if (redirectPath) {
    history.push(redirectPath);
  }

  return result;
};
