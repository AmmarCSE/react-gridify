import { combineReducers } from 'redux'
import {dataReducer, headerReducer, editRowsReducer, addRowsReducer} from '~/src/grid/reducers'
import {pageCountReducer, currentPageReducer} from '~/src/pager/reducers'
import {filtersReducer} from '~/src/filters/reducers'

const rootReducer = combineReducers({
    data : dataReducer,
    headers : headerReducer,
    editRows: editRowsReducer,
    addRows: addRowsReducer,
    pageCount: pageCountReducer,
    currentPage: currentPageReducer,
    filters: filtersReducer
})

export default rootReducer
