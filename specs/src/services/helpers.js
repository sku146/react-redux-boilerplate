export function ApiError(message) {
  this.name = 'ApiError';
  this.message = message || 'Default Message';
  this.stack = (new Error()).stack;
}
ApiError.prototype = Object.create(Error.prototype);
ApiError.prototype.constructor = ApiError;

const REGEXP_URL = /^(https?:\/\/[^\/]+)(.+)/;
export const matchEndpoint = (endpoint) => {
  const [, host, path] = endpoint.match(REGEXP_URL);
  return { host, path };
};

export default {
  ApiError,
};
