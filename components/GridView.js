import React from 'react'
import HeaderRow from './HeaderRow'
import Row from './Row'
import utils from '../resources/Utils'

const Grid = ({ data, headers }) => (
    <table>
        <thead>
            <HeaderRow headers={headers}/>
        </thead>
        <tbody>
            {
                data.map(dataRow =>{
                    return <Row 
                        key={utils.generateReactKey()} 
                        rowData={dataRow} 
                        headers={headers}
                    />
                })
            }
        </tbody>
    </table>
)

export default Grid
