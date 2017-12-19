/* eslint no-unused-expressions: 0 */
import { connect } from 'react-redux'

import {changeFont} from '../actions/actions'

// COMPONENTS
import Fonts from './Fonts.jsx';

const mapStateToProps = state => {
  return {
    fonts: state.fonts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeFont: (name, value) => {
      dispatch(changeFont(name, value))
    }
  }
}

const FontContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Fonts)

export default FontContainer;
