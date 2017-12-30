/* eslint no-unused-expressions: 0 */
import { connect } from 'react-redux'

import { changeSpacing } from '../actions/actions'

// COMPONENTS
import Spacing from './Spacing.jsx';

const mapStateToProps = state => {
  return {
    spacing: state.spacing
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSpacing: (name, value) => {
      dispatch(changeSpacing(name, value))
    }
  }
}

const SpacingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Spacing)

export default SpacingContainer;
