import { legacy_createStore } from 'redux';
import { taskReducer } from './reducers';

const store = legacy_createStore(taskReducer);  // store created 

export default store;
