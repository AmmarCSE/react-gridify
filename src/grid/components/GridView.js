import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeaderRow from './HeaderRow'
import Row from './Row'
import utils from '../resources/Utils'
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
    return <div>
        <table>
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
                            key={utils.generateReactKey()} 
                            rowData={dataRow} 
                            headers={headers}
                            index={index}
                            mode={mode}
                        />
                    })
                }
            </tbody>
        </table>
        <label onClick={this.onAddRowClick}>Add New</label>
    </div>
  }
}

export default connect()(GridView);
