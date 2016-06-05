import { connect } from 'react-redux'
//import { toggleTodo } from '../actions'
import PagerView from '../components/PagerView'

const mapStateToProps = (state) => {
  const { 
    pageCount
    , currentPage 
  } = state

  return {
    pageCount
    , currentPage 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Pager = connect(
  mapStateToProps,
  mapDispatchToProps
)(PagerView)

export default Pager
