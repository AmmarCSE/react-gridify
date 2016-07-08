import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFilterData } from '../src/filters/actions'
import { fetchGridData } from '../src/grid/actions'
import { fetchPagerData } from '../src/pager/actions'
import Filters from '../src/filters/containers/Filters'
import Grid from '../src/grid/containers/Grid'
import Pager from '../src/pager/containers/Pager'
import 'babel-polyfill'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, search } = this.props
    dispatch(fetchFilterData(search))
    dispatch(fetchGridData(search))
    dispatch(fetchPagerData(search))
  }

  render() {
    return (
        <div>
            <Filters injectFilterItemsDelegate={(implementor) => (retrieveFilterItemsDelegate = implementor)}/>
            <Grid />
            <Pager />
        </div>
    )
  }
}

export default connect()(App)

export let retrieveFilterItemsDelegate = null
