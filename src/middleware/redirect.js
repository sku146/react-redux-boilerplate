export default history => () => next => (action) => {
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
