import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFilterDataIfNeeded } from '../src/filters/actions'
import { fetchGridDataIfNeeded } from '../src/grid/actions'
import Filters from '../src/filters/containers/Filters'
import Grid from '../src/grid/containers/Grid'
import Pager from '../src/pager/containers/Pager'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, search } = this.props
    dispatch(fetchFilterDataIfNeeded(search))
    dispatch(fetchGridDataIfNeeded(search))
  }

  render() {
    return (
        <div>
            <Filters />
            <Grid />
            <Pager />
        </div>
    )
  }
}

export default connect()(App)
