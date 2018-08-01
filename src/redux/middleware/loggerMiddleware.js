import { createLogger } from 'redux-logger';

// log actions in development mode
export default createLogger({
  collapsed: true,

  // only log in development mode
  // eslint-disable-next-line no-undef
  predicate: () => __DEV__,
});
