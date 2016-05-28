import React from 'react'
//import FilterLink from '../containers/FilterLink'
import Header from './Header'
import utils from '../resources/Utils'

const HeaderRow = ({ headers }) => (
    <tr>
        {
            headers.map(headerKeyVal => {
                let key = Object.keys(headerKeyVal)[0];

                return <Header 
                    key={utils.generateReactKey()} 
                    header={headerKeyVal[key]}
                />
            })
        }
        <Header 
            key={'action'} 
            header={'Action'}
        />
    </tr>
)

export default HeaderRow
