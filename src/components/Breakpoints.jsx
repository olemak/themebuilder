import React, { Component } from 'react';

class Breakpoints extends Component {
    render() {
        return (
            <div className="Breakpoints">
                <h3 className="Breakpoints__header">Breakpoints</h3>
                    <h4>{`Small: ${this.props.breakpoints.small}`}</h4>
                    <h4>{`Medium: ${this.props.breakpoints.medium}`}</h4>
                    <h4>{`Large: ${this.props.breakpoints.large}`}</h4>
            </div>
        );
    }
}

export default Breakpoints;