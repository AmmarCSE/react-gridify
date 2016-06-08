import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cell from './Cell'
import {generateReactKey} from '~/src/utils/utils'
import { editRow, commitRow, deleteRow, commitAddRow } from '../actions/index'
import  {rowKey}  from '~/src/utils/config'

export default class Row extends Component {
  constructor(props) {
    super(props)
    let handlers = ['onEditRowClick', 'onCommitRowClick', 'onCellChange', 'onDeleteRowClick', 'onCommitNewRowClick']
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
    //index is initally passed in but we dont explitly indicate that in rended since it is not used there
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
    confirm(`Are you sure you want to ${this.props.mode == 'edit' ? 'delete' : 'cancel'} this row?`) && this.props.dispatch(deleteRow(this.props.index), this.props.rowData[rowKey])
  }

  onCellChange(event) {
    //aggregate changes made to row
    this.setState({[event.target.name] : event.target.value})
  }

  render() {
    const { rowData, headers, mode } = this.props
    return(
        <tr>
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
                                    <label onClick={this.onEditRowClick}>Edit</label>
                                    <label onClick={this.onDeleteRowClick}>Delete</label>
                                </div>
                            )
                        }   
                        else if(mode == 'edit'){
                            return <label onClick={this.onCommitRowClick}>Commit</label>
                        }   
                        else if(mode == 'add'){
                            return (
                                <div>
                                    <label onClick={this.onCommitNewRowClick}>Commit</label>
                                    <label onClick={this.onDeleteRowClick}>Cancel</label>
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
