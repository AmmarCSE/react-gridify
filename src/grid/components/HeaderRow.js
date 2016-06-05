import React from 'react'
//import FilterLink from '../containers/FilterLink'
import Header from './Header'
import {generateReactKey} from '~/src/utils/utils'

const HeaderRow = ({ headers }) => (
    <tr>
        {
            headers.map(headerKeyVal => {
                let key = Object.keys(headerKeyVal)[0];

                return <Header 
                    key={generateReactKey()} 
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
