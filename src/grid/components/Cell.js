import React from 'react'

const Cell = ({ value }) => {
    return <td>
        <input
            value={value}
            readOnly
        />
    </td>
}

export default Cell
