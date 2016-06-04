import { connect } from 'react-redux'
//import { toggleTodo } from '../actions'
import GridView from '../components/GridView'
import {editRow} from '../actions/index'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

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
