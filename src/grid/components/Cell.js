/*import React from 'react'

const Cell = ({ propertyKey, value, inEditMode, onCellChange }) => {
    return <td>
        <input
            name={propertyKey}
            defaultValue={value}
            readOnly={inEditMode ? '' : 'readonly'}
            onBlur={(event) => {this.setState({[event.target.name] : event.target.value}); onCellChange(event)}}
        />
    </td>
}

export default Cell*/
import React, { Component } from 'react'

export default class Cell extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate() {
    return !this.props.inEditMode 
  }

  render() {
    const {  propertyKey, value, inEditMode, onCellChange  } = this.props
    return <td>
        <input
            name={propertyKey}
            defaultValue={value}
            readOnly={inEditMode ? '' : 'readonly'}
            onBlur={(event) => {this.setState({[event.target.name] : event.target.value}); onCellChange(event)}}
        />
    </td>
  }
}
