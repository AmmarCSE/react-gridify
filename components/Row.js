import React from 'react'
import Cell from './Cell'
import utils from '../resources/Utils'

const Row = ({ rowData, headers }) => (
    <tr>
        {
            headers.map(headerKeyVal => {
                let key = Object.keys(headerKeyVal)[0];
                return <Cell 
                    key={utils.generateReactKey()} 
                    value={rowData[key]}
                />
            })
        }
    </tr>
)

export default Row
