import React, { Component } from 'react'
import {generateReactKey} from '~/src/utils/utils'
import {triggerFilter} from '../actions'

export default class CheckboxFilter extends Component {
  constructor(props) {
    super(props)
    this.generateFilterItem = this.generateFilterItem.bind(this)
  }
  generateFilterItem() {
    if(typeof(this.filterItem) == 'undefined' && this.props.items[0].selected){
        this.filterItem = this._createFilterItem(this.props.items[0].key)
    }

    return this.filterItem
  }

  _createFilterItem(value) {
    return { 
        identifier : this.props.filterIdentifier, 
        value,
        operator: this.props.filterOperator, selected: true 
    } 
  }

  render() {
    const { filterIdentifier, filterOperator, items, triggerFilterHandler } = this.props

    return (
      <ul>
        {
            items.map((item, index) =>
              <li key={generateReactKey()}>
                <div className="checkbox checkbox-primary">
                    <input 
                        id={filterIdentifier+index}
                        type="checkbox" 
                        value={item.key} 
                        checked={item.selected ? 'checked' : ''}
                        onChange={
                            (event) => {
                                let filterItem = event.target.checked ? 
                                    this._createFilterItem(event.target.value)
                                    : false
                                this.filterItem = filterItem
                                triggerFilterHandler()
                            }
                        }/>
                    <label htmlFor={filterIdentifier+index}>
                        {item.value}
                    </label>
                </div>
                </li>
            )
        }
      </ul>
    )
  }
}
