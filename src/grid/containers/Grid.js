import { connect } from 'react-redux'
//import { toggleTodo } from '../actions'
import GridView from '../components/GridView'

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
console.log({
    data: state.data || [],
    headers: state.headers || [] 
  }
)
  return {
    data: state.data || [],
    headers: state.headers || [] 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const Grid = connect(
  mapStateToProps
  //mapDispatchToProps
)(GridView)

export default Grid
