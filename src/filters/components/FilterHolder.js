import React from 'react'
import CheckboxFilter from './CheckboxFilter'
import {generateReactKey} from '~/src/utils/utils'

const FilterHolder = ({ filter }) => (
    <div>
        <h2>{filter.header}</h2>
        {filterTypeMap[filter.filterType](filter.items)}
    </div>
)

export default FilterHolder

const filterTypeMap = {
    'multiple' : (items) =>  <CheckboxFilter key={generateReactKey()} items={items}/>
}
