import React, { Component } from 'react';
import "./spacing.css"

function Space ({name, value, changeSpace, prev, next}) {
    return <div className="space">
        <label className="space__label">{name}</label>
        <input 
            type="range" 
            value={value} 
            min={prev} 
            max={next}
            step={0.1}
            id={`space-${name}`}
            onChange={
                event => changeSpace(name, parseFloat(event.target.value))
            }
            />
        <output className="space__output" htmlFor={`space-${name}`}>{value.toFixed(1)}</output> 
        <span className="space__visualisation-wrapper space__visualisation-wrapper--px">
            px: <span className="space__visualisation space__visualisation--px" style={{width: `${value}px`}} />
        </span>
        <span className="space__visualisation-wrapper space__visualisation-wrapper--em">
            em: <span className="space__visualisation space__visualisation--em" style={{width: `${value}em`}} />
        </span>
 </div>
}

class Spacing extends Component {

    paint(spacing) {
        let spaces = [];
        let values = [spacing.tiny, spacing.small, spacing.medium, spacing.large, spacing.huge];
        let i = 0;
        for (const space in spacing) {
           spaces.push(<Space
                name={space} 
                value={this.props.spacing[space]} 
                changeSpace={this.props.changeSpacing} 
                prev={(i === 0 ? 0.2 : values[(i - 1)])}
                next={(i === values.length ? values[values.length] * 2 : values[++i])}
                key={`space-${space}`}
            />)
        }
        return spaces;
    }


    render() {
        return (
            <div className="Spacing">
                <h3 className="Spacing__header">Spacing</h3>
                {this.paint(this.props.spacing)}
            </div>
        );
    }
}

export default Spacing;