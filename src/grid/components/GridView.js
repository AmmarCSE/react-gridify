import React from 'react'
import HeaderRow from './HeaderRow'
import Row from './Row'
import utils from '../resources/Utils'

const Grid = ({ data, headers, editRows, onEditRowClick }) => (
    <table>
        <thead>
            <HeaderRow headers={headers}/>
        </thead>
        <tbody>
            {
                data.map((dataRow, index) =>{
                    return <Row 
                        key={utils.generateReactKey()} 
                        rowData={dataRow} 
                        headers={headers}
                        index={index}
                        inEditMode={~editRows.indexOf(index)}
                    />
                })
            }
        </tbody>
    </table>
)

export default Grid
