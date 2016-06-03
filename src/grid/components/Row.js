import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cell from './Cell'
import utils from '../resources/Utils'
import { editRow, commitRow, deleteRow } from '../actions/index'
import  {rowKey}  from '~/src/grid/config'

export default class Row extends Component {
  constructor(props) {
    super(props)
    let handlers = ['onEditRowClick', 'onCommitRowClick', 'onCellChange', 'onDeleteRowClick'];
    handlers.forEach(handler => {
        this[handler] = this[handler].bind(this);
    });
    /*let handlers = [this.onEditRowClick, this.onCommitRowClick, this.onCellChange, this.onDeleteRowClick]
    handlers.forEach(handler => handler = handler.bind(this))*/
  }

  shouldComponentUpdate() {
    return !this.props.inEditMode 
  }

  onEditRowClick() {
    //index is initally passed in but we dont explitly indicate that in rended since it is not used there
    this.props.dispatch(editRow(this.props.index))
  }

  onCommitRowClick() {
    this.state = this.state || {}

    this.state[rowKey] = this.props.rowData[rowKey]
    this.props.dispatch(commitRow(this.state, this.props.index))
  }

  onDeleteRowClick() {
    confirm('Are you sure you want to delete this row?') && this.props.dispatch(deleteRow(this.props.index), this.props.rowData[rowKey])
  }

  onCellChange(event) {
    //aggregate changes made to row
    this.setState({[event.target.name] : event.target.value})
  }

  render() {
    const { rowData, headers, inEditMode } = this.props
    return(
        <tr>
            {
                //use header keys to drive cell value allocation
                headers.map(headerKeyVal => {
                    let rowKey = Object.keys(headerKeyVal)[0];
                    return <Cell 
                        key={utils.generateReactKey()} 
                        propertyKey={rowKey}
                        value={rowData[rowKey]}
                        inEditMode={inEditMode}
                        onCellChange={this.onCellChange}
                    />
                })
            }

            {/*have these here rather than separate components since their actions are tied to the whole row*/}
            <td>
                { !inEditMode ? <div>
                        <label onClick={this.onEditRowClick}>Edit</label>
                        <label onClick={this.onDeleteRowClick}>Delete</label>
                    </div>
                    :   
                    <label onClick={this.onCommitRowClick}>Commit</label>
                }
            </td>
        </tr>
    )
  }
}
export default connect()(Row);
