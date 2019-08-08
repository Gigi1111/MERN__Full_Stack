//this is a rootreducer
//to bring together all other reducers
//we only need one for items now
//but if we have authentication, we need an auth reducer
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
	item: itemReducer
});
