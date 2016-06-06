import React, { Component } from 'react'
import { connect } from 'react-redux'
import {generateReactKey} from '~/src/utils/utils'
import FilterHolder from './FilterHolder'

export default class FiltersView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { filters } = this.props
    return <div>
        {
            Object.keys(filters).map((filterKey) =>{
                return <FilterHolder 
                    key={generateReactKey()} 
                    filter={filters[filterKey]} 
                />
            })
        }
    </div>
  }
}

export default connect()(FiltersView);
