import React, { Component } from 'react'
import {generateReactKey} from '~/src/utils/utils'
import {triggerFilter} from '../actions'

export default class CheckboxFilter extends Component {
  constructor(props) {
    super(props)
    this.generateFilterItem = this.generateFilterItem.bind(this)
  }
  generateFilterItem() {
    return this.filterItem
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
                        onChange={(event) => {
                            let filterItem = event.target.checked ? 
                                { identifier : this.props.filterIdentifier, value: event.target.value, operator: this.props.filterOperator, selected: true } 
                                : false
                            this.filterItem = filterItem
                            triggerFilterHandler()
                        }}/>
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
