/* eslint no-unused-expressions: 0 */
import { connect } from 'react-redux'

import {changeAspect} from '../actions/actions'

// COMPONENTS
import Aspect from './Aspect.jsx';

const mapStateToProps = state => {
  return {
    aspects: state.aspects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeAspect: (name, value) => {
      dispatch(changeAspect(name, value))
    }
  }
}

const AspectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Aspect)

export default AspectContainer;
