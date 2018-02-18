/* eslint no-unused-expressions: 0 */
import { connect } from 'react-redux'

import { changeSize } from '../actions/actions'

// COMPONENTS
import Sizes from './Sizes.jsx';

const mapStateToProps = state => {
  return {
    sizes: state.sizes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSize: (name, value) => {
      dispatch(changeSize(name, value))
    }
  }
}

const SizeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sizes)

export default SizeContainer;
