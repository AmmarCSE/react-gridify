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
  }

  handleFilterTrigger() {
    //retrieve items through child cascade call
    let filterItems = Object.keys(this.refs).reduce((aggregate, current) => {
            let filterItem = this.refs[current].generateFilterItem()
            if(filterItem){
                aggregate.push(filterItem)
            }
            return aggregate
        }, [])
    //let filterItems = Object.keys(this.refs).map(filterHolderKey => this.refs[filterHolderKey].generateFilterItem())
    triggerFilter(triggerFilterCallback, filterItems, this.props.dispatch)
  }

  render() {
    const { filters } = this.props
    return <div>
        <div className="checkbox checkbox-primary">
            <input id="checkbox2" className="styled" type="checkbox" defualtValue="checked"/>
            <label htmlFor="checkbox2">
                Primary
            </label>
        </div>
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
