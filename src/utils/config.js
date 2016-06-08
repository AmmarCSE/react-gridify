import {fetchGridData} from '../grid/actions/'

let rowKey = 'product_id'
let searchPath = 'product_id'
let triggerFilterCallback = (filterItems, dispatch) => dispatch(fetchGridData(filterItems))

export { rowKey, searchPath, triggerFilterCallback }
