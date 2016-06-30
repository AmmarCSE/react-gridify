import React, { Component } from 'react'
import { connect } from 'react-redux'
import {generateReactKey} from '~/src/utils/utils'
import FilterHolder from './FilterHolder'
import {triggerFilter} from '../actions'
import  {triggerFilterCallback}  from '~/src/utils/config'

export default class FiltersView extends Component {
  constructor(props) {
    super(props)
    this.handleFilterTrigger = this.handleFilterTrigger.bind(this)
    this.retrieveFilterItems = this.retrieveFilterItems.bind(this)

    this.props.injectFilterItemsDelegate(() => this.retrieveFilterItems())
  }

  handleFilterTrigger() {
    //retrieve items through child cascade call
    let filterItems = this.retrieveFilterItems()
    triggerFilter(triggerFilterCallback, filterItems, this.props.dispatch)
  }

  retrieveFilterItems() {
    //retrieve items through child cascade call
    return Object.keys(this.refs).reduce((aggregate, current) => {
            let filterItem = this.refs[current].generateFilterItem()
            if(filterItem){
                aggregate.push(filterItem)
            }
            return aggregate
        }, [])
  }

  render() {
    const { filters } = this.props

    return <div className="filter-components">
        {
            Object.keys(filters).map((filterKey, index) =>{
                return <FilterHolder 
                            key={generateReactKey()} 
                            triggerFilterHandler={this.handleFilterTrigger}
                            filter={filters[filterKey]} 
                            ref={`filterHolder${index}`}
                        />
            })
        }
    </div>
  }
}

export default connect()(FiltersView);
