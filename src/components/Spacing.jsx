import React, { Component } from "react";
import "./spacing.css";

function Space({ name, value, changeSpace, prev, next }) {
    return (
        <div className="space">
            <label className="space__label">{name}</label>
            <input
                type="range"
                value={value}
                min={prev}
                max={next}
                step={0.1}
                id={`space-${name}`}
                onChange={event =>
                    changeSpace(name, parseFloat(event.target.value))
                }
            />
            <output className="space__output" htmlFor={`space-${name}`}>
                {typeof value === "number" ? value.toFixed(2) : value}
            </output>

            <span className="space__visualisation-wrapper space__visualisation-wrapper--vw">
                <span
                    className="space__visualisation space__visualisation--vw"
                    style={{ width: `${value}em`, height: `${value}em` }}
                />
            </span>
        </div>
    );
}

class Spacing extends Component {
    paint(spacing) {
        let spaces = [];
        let values = Object.values(spacing);
        let i = 0;
        for (const space in spacing) {
            spaces.push(
                <Space
                    name={space}
                    value={this.props.spacing[space]}
                    changeSpace={this.props.changeSpacing}
                    prev={i === 0 ? 0.1 : values[i - 1]}
                    index={`index:${i} values.length:${values.length}`}
                    next={i === values.length - 1 ? 10 : values[++i]}
                    key={`space-${space}`}
                />
            );
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
