import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderRow from './HeaderRow'
import Row from './Row'
import {generateReactKey} from '~/src/utils/utils'
import { addRow } from '../actions/index'

export default class GridView extends Component {
  constructor(props) {
    super(props)

    this.onAddRowClick = this.onAddRowClick.bind(this)
  }

  onAddRowClick() {
    this.props.dispatch(addRow(this.props.data.length))
  }

  render() {
    const { data, headers, editRows, onEditRowClick, addRows } = this.props

    return <div className="grid-components">
        <div className="grid-container">
            <table className="grid">
                <thead>
                    <HeaderRow headers={headers}/>
                </thead>
                <tbody>
                    {
                        data.map((dataRow, index) =>{
                            let mode = ''
                            if(~editRows.indexOf(index)){
                                mode = 'edit'
                            }
                            if(~addRows.indexOf(index)){
                                mode = 'add'
                            }

                            return <Row 
                                key={generateReactKey()} 
                                rowData={dataRow} 
                                headers={headers}
                                index={index}
                                mode={mode}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
        <div className="add-row-container">
            <span className="add-row" onClick={this.onAddRowClick}>Add New</span>
        </div>
    </div>
  }
}

export default connect()(GridView);
