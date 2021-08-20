import { combineReducers } from 'redux'
import getContinentsReducer from './getContinentsReducer'

const allReducers = combineReducers({
    getContinents: getContinentsReducer
})

export default allReducers;