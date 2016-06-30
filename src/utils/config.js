import {fetchGridData} from '../grid/actions/'
import {fetchPagerData} from '../pager/actions/'
import {retrieveFilterItemsDelegate} from '~/src/App'

let rowKey = 'product_id'
let searchPath = 'product_id'
let triggerFilterCallback = (filterItems, dispatch) => {
        dispatch(fetchGridData({filterItems}))
        dispatch(fetchPagerData({filterItems}))
    }
let triggerPageCallback = (page, dispatch) => {
        let filterItems = retrieveFilterItemsDelegate()

        dispatch(fetchGridData({filterItems, page}))
        dispatch(fetchPagerData({filterItems}))
    }

export { rowKey, searchPath, triggerFilterCallback, triggerPageCallback }
