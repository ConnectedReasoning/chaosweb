import { createStore, applyMiddleware, combineReducers } from 'redux'; 
import {createLogger} from 'redux-logger'; 
import promiseMiddleware from 'redux-promise';
import reducer from './reducer'

const logger = createLogger(); 
//const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default (initialState = {}) => { 

  return createStore(
    combineReducers({
      chaos: reducer,
    }),
    applyMiddleware(logger, promiseMiddleware ) //logger goes here

  )
};