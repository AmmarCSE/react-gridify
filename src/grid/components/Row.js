import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cell from './Cell'
import {generateReactKey} from '~/src/utils/utils'
import { editRow, commitRow, deleteRow, commitAddRow, canceledOperationRow } from '../actions/index'
import  {rowKey}  from '~/src/utils/config'

export default class Row extends Component {
  constructor(props) {
    super(props)
    let handlers = ['onEditRowClick', 'onCommitRowClick', 'onCellChange', 'onDeleteRowClick', 'onCommitNewRowClick', 'onCancelOperationRowClick']
    handlers.forEach(handler => {
        this[handler] = this[handler].bind(this)
    })
    /*let handlers = [this.onEditRowClick, this.onCommitRowClick, this.onCellChange, this.onDeleteRowClick]
    handlers.forEach(handler => handler = handler.bind(this))*/
  }

  shouldComponentUpdate() {
    return !this.props.mode
  }

  onEditRowClick() {
    //index is initally passed in but we dont explitly indicate that in rendered since it is not used there
    this.props.dispatch(editRow(this.props.index))
  }

  onCommitRowClick() {
    this.state = this.state || {}

    this.state[rowKey] = this.props.rowData[rowKey]
    this.props.dispatch(commitRow(this.state, this.props.index))
  }

  onCommitNewRowClick() {
    this.state = this.state || {}
    this.props.dispatch(commitAddRow(this.state, this.props.index))
  }

  onDeleteRowClick() {
    confirm('Are you sure you want to delete this row?') && this.props.dispatch(deleteRow(this.props.index, this.props.rowData[rowKey]))
  }

  onCancelOperationRowClick() {
    confirm('Are you sure you want to cancel this row operation?') && this.props.dispatch(canceledOperationRow(this.props.index))
  }

  onCellChange(event) {
    //aggregate changes made to row
    this.setState({[event.target.name] : event.target.value})
  }

  render() {
    const { rowData, headers, mode } = this.props
    return(
        <tr className={mode}>
            {
                //use header keys to drive cell value allocation
                headers.map(headerKeyVal => {
                    let rowKey = Object.keys(headerKeyVal)[0];
                    return <Cell 
                        key={generateReactKey()} 
                        propertyKey={rowKey}
                        value={rowData[rowKey]}
                        mode={mode}
                        onCellChange={this.onCellChange}
                    />
                })
            }

            {/*have these here rather than separate components since their actions are tied to the whole row*/}
            <td>
                {
                    (() => { 
                        if(!mode){  
                            return(
                                <div>
                                    <span className="edit-row icon" onClick={this.onEditRowClick}></span>
                                    <span className="delete-row icon" onClick={this.onDeleteRowClick}></span>
                                </div>
                            )
                        }   
                        else if(mode == 'edit'){
                            return (
                                <div>
                                    <span className="commit-row icon" onClick={this.onCommitRowClick}></span>
                                    <span className="cancel-operation-row icon" onClick={this.onCancelOperationRowClick}></span>
                                </div>
                            )
                        }   
                        else if(mode == 'add'){
                            return (
                                <div>
                                    <span className="add-row-icon icon" onClick={this.onCommitNewRowClick}></span>
                                    <span className="cancel-operation-row icon" onClick={this.onCancelOperationRowClick}></span>
                                </div>
                            )
                        }   
                    })()
                }
            </td>
        </tr>
    )
  }
}
export default connect()(Row);
