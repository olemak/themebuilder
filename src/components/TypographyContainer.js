/* eslint no-unused-expressions: 0 */
import { connect } from 'react-redux'

import {changeFont, toggleFontVariation} from '../actions/actions'

// COMPONENTS
import Typography from './Typography.jsx';

const mapStateToProps = state => {
  return {
    fonts: state.fonts,
    sizes: state.sizes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeFont: (name, value) => {
      dispatch(changeFont(name, value))
    },
    toggleFontVariation: (name, variation) => {
      dispatch(toggleFontVariation(name, variation))
    }
  }
}

const TypographyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Typography)

export default TypographyContainer;
