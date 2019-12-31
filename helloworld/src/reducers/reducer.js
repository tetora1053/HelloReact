import { combineReducers } from 'redux'
import count from './count'
import time from './getTime'

const rootReducer = combineReducers({
    count,
    time
});

export default rootReducer

