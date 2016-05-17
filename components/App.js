import React from 'react'
import Grid from '../containers/Grid'

import defaultData from '../resources/DefaultData'

const App = () => (
    <Grid data={defaultData.data} headers={defaultData.headers}/>
)

export default App
