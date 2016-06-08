import React, { Component } from 'react'
import {generateReactKey} from '~/src/utils/utils'

export default class CheckboxFilter extends Component {
  render() {
    const { items } = this.props
    return (
      <ul>
        {
            items.map((item) =>
              <li key={generateReactKey()}><input type=checkbox value={item.key}/></li>
            )
        }
      </ul>
    )
  }
}
