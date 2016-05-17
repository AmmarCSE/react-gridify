import React from 'react'

const Cell = ({ value }) => {
console.log(value);
    return <td>
        <input
            value={value}
            readOnly
        />
    </td>
}

export default Cell
