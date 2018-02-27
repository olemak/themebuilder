/* eslint no-unused-expressions: 0 */
import { connect } from "react-redux";

// COMPONENTS
import { RootStyle } from "./RootStyle";

const mapStateToProps = state => {
    return {
        colors: state.colors
    };
};

export const RootStyleContainer = connect(mapStateToProps)(RootStyle);
