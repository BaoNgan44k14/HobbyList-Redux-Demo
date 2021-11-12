
import hobbyReducer from './hobby';
import { combineReducers } from 'redux';
import { useReducer } from 'react';
import userReducer from './user';


const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,
});

export default rootReducer;