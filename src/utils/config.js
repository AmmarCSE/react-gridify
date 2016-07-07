import {fetchGridData} from '../grid/actions/'
import {fetchPagerData} from '../pager/actions/'
import {retrieveFilterItemsDelegate} from '~/src/App'

const rowKey = 'product_id'

const searchPath = 'product_id'

const triggerFilterCallback = (filterItems, dispatch) => {
        dispatch(fetchGridData({filterItems}))
        dispatch(fetchPagerData({filterItems}))
    }
const triggerPageCallback = (page, dispatch) => {
        let filterItems = retrieveFilterItemsDelegate()

        dispatch(fetchGridData({filterItems, page}))
        dispatch(fetchPagerData({filterItems, page}))
    }

const dropdownFields = {
        'category_name': (() => ({
                    dataList: sqlAgent
                        .query('SELECT DISTINCT category_id, category_name FROM categories JOIN products ON products.category_id = categories.category_id ORDER BY category_name')
                        .map(row => ({key: row.category_id,value: row.category_name})),
                    key: 'category_id'
                }))(),
        'brand_name': (() => ({
                    dataList: sqlAgent
                        .query('SELECT DISTINCT brand_id, brand_name FROM brands JOIN products ON products.brand_id = brands.brand_id')
                        .map(row => ({key: row.brand_id,value: row.brand_name})),
                    key: 'brand_id'
                }))(),
        'supplier_name':(() => ({
                    dataList: sqlAgent
                        .query('SELECT DISTINCT supplier_id, supplier_name FROM suppliers JOIN products ON products.supplier_id = suppliers.supplier_id')
                        .map(row => ({key: row.supplier_id,value: row.supplier_name})),
                    key: 'supplier_id'
                }))()
    }

export { rowKey, searchPath, triggerFilterCallback, triggerPageCallback, dropdownFields }
