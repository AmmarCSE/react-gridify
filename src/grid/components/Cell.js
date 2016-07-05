import React, { Component } from 'react'
import  {dropdownFields}  from '~/src/utils/config'

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.preStateDirectives = []
  }

  shouldComponentUpdate() {
    return !this.props.mode
  }

  componentDidMount() {
    this.preStateDirectives.forEach(directive => directive())
  }

  render() {
    const {  propertyKey, mode, aggregateRowState  } = this.props
    let value = this.props.value
    //transform limited option properties to dropdown boxes
    let className = '', dataList = ''
    if(~Object.keys(dropdownFields).indexOf(propertyKey) && mode){
        className = 'awesomplete awesomplete-fresh' 
        dataList = dropdownFields[propertyKey].dataList.map(row => row.value).join(',')

        if(!value){
            value = dropdownFields[propertyKey].dataList.length ? dropdownFields[propertyKey].dataList[0].value : ''
            this.preStateDirectives.push(() => aggregateRowState(propertyKey, value))
        }
    }

    return <td>
        <input
            name={propertyKey}
            className={className}
            data-list={dataList}
            defaultValue={value}
            readOnly={!mode || dataList ? 'readonly' : ''}
            onBlur={
                (event) => {
                    aggregateRowState(event.target.name, event.target.value)
                }
            }
        />
    </td>
  }
}
