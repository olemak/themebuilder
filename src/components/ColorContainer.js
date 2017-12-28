/* eslint no-unused-expressions: 0 */
import { connect } from 'react-redux'

import {changeColor} from '../actions/actions'

// COMPONENTS
import Palette from './Palette.jsx';

const mapStateToProps = state => {
  return {
    colors: state.colors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeColor: (colorName, variation, value) => {
      dispatch(changeColor(colorName, variation, value))
    }
  }
}

const ColorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Palette)

export default ColorContainer;
