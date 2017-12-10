/* eslint no-unused-expressions: 0 */
import { connect } from 'react-redux'

import {CHANGE_COLOR, changeColor} from '../actions/actions'

// COMPONENTS
import Palette from './Palette.jsx';

const mapStateToProps = state => {
  return {
    colors: state.colors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeColor: (index, variation, value) => {
      dispatch(changeColor(index, variation, value))
    }
  }
}

const ColorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Palette)

export default ColorContainer;
