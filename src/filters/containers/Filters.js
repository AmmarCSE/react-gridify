import { connect } from 'react-redux'
import FiltersView from '../components/FiltersView'

const mapStateToProps = (state) => {
  const { 
    filters
  } = state

  return {
    filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Filters = connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersView)

export default Filters
