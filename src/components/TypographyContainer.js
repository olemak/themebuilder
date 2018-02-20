/* eslint no-unused-expressions: 0 */
import { connect } from 'react-redux';
import { changePreset } from '../actions/actions';

// COMPONENTS
import Typography from './Typography.jsx';

const mapStateToProps = state => {
  return {
    fonts: state.fonts,
    sizes: state.sizes,
    typography: state.typography
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changePreset: (preset, property, value) => {
      dispatch(changePreset(preset, property, value))
    }
  }
}

const TypographyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Typography)

export default TypographyContainer;
