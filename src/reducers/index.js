import { combineReducers } from 'redux'
import {dataReducer, headerReducer, editRowsReducer, addRowsReducer} from '~/src/grid/reducers'
import {pageCountReducer, currentPageReducer} from '~/src/pager/reducers'

const rootReducer = combineReducers({
    data : dataReducer,
    headers : headerReducer,
    editRows: editRowsReducer,
    addRows: addRowsReducer,
    pageCount: pageCountReducer,
    currentPage: currentPageReducer
})

export default rootReducer
