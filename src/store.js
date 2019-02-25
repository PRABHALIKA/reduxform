import {createStore,applyMiddleware,combineReducers} from 'redux';
import logger from 'redux-logger';
import reduxFormReducer from './reduxFormReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './reduxFormSaga';
import {reducer as form} from 'redux-form'

const saga=createSagaMiddleware();
const store=createStore(combineReducers({reduxFormReducer,form}),applyMiddleware(logger,saga));


saga.run(rootSaga);
export default store;