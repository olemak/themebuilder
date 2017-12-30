/* eslint no-unused-expressions: 0 */
import { connect } from 'react-redux'

// COMPONENTS
import Dashboard from './Dashboard.jsx';

const mapStateToProps = state => {
  return {
    state
  }
}

const DashboardContainer = connect(
  mapStateToProps
)(Dashboard)

export default DashboardContainer;
