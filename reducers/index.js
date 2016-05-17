import { combineReducers } from 'redux'
import data from './data'
import headers from './headers'

const gridApp = combineReducers({
    data,
    headers 
})

export default gridApp
