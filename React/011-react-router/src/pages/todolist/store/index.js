import { createStore,applyMiddleware } from 'redux'
import reducer from './reducer.js'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const logger = createLogger({
  // ...options
});
const middlewares = [];
middlewares.push(thunk)

if (process.env.NODE_ENV === `development`) {
	  middlewares.push(logger);
}
const store = createStore(reducer,applyMiddleware(...middlewares))

export default store