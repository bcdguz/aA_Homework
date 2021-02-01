import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';


const configureStore = (preloadedState = {}) => {
  let store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  
  return store;
}


const addLoggingToDispatch = store => next => action => {

  console.log('Action received:', action);
  console.log('State pre-dispatch:', store.getState());

  let result = next(action);

  console.log('State post-dispatch:', store.getState());

  return result;
};

export default configureStore;
