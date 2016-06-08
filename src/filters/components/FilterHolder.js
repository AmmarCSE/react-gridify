import React, { Component } from 'react'
import {generateReactKey} from '~/src/utils/utils'
import CheckboxFilter from './CheckboxFilter'

export default class FilterHolder extends Component {

  //have this be an 'inverted inheritance' call since the parent needs to gather items from all filters
  generateFilterItem() {
    return this.refs.filterComponent.generateFilterItem()
  }

  render() {
    const { filter, triggerFilterHandler } = this.props
    return (
        <div>
            <h2>{filter.header}</h2>
            {
                this.filterComponent = filterTypeMap[filter.filterType](filter, triggerFilterHandler)
            }
        </div>
    )
  }
}

const filterTypeMap = {
    'multiple' : (filter, triggerFilterHandler) =>  
        <CheckboxFilter 
            key={generateReactKey()} 
            items={filter.items} 
            filterIdentifier={filter.filterIdentifier} 
            filterOperator={filter.filterOperator}
            triggerFilterHandler={triggerFilterHandler}
            ref="filterComponent"/>
}
