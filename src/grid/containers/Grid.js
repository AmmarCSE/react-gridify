import { connect } from 'react-redux'
import GridView from '../components/GridView'
import {editRow} from '../actions/index'

const mapStateToProps = (state) => {
  const { data,
    headers,
    editRows,
    addRows
  } = state

  return {
    data,
    headers,
    editRows,
    addRows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Grid = connect(
  mapStateToProps,
  mapDispatchToProps
)(GridView)

export default Grid
