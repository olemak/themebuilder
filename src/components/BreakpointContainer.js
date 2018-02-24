/* eslint no-unused-expressions: 0 */
import { connect } from "react-redux";

import { changeBreakpoint } from "../actions/actions";

// COMPONENTS
import Breakpoints from "./Breakpoints.jsx";

const mapStateToProps = state => {
    return {
        breakpoints: state.breakpoints
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeBreakpoints: (index, name, value) => {
            dispatch(changeBreakpoint(index, name, value));
        }
    };
};

const BreakpointContainer = connect(mapStateToProps, mapDispatchToProps)(
    Breakpoints
);

export default BreakpointContainer;
