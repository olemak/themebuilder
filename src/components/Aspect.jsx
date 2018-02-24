import React, { Component } from "react";
import "./aspect.css";

class Aspect extends Component {
    ratioCalculator(height, width) {
        const divisor = this.greatestCommonDivisor(height, width);
        return `${width / divisor}:${height / divisor}`;
    }

    greatestCommonDivisor(height, width) {
        if (width === 0) return height;
        return this.greatestCommonDivisor(width, height % width);
    }

    render() {
        return (
            <div className="Aspect">
                {Object.keys(this.props.aspects).map(aspect => (
                    <div
                        style={{
                            height: 300 * this.props.aspects[aspect] + "px"
                        }}
                        className={`aspect aspect--${aspect}`}
                        key={`aspect-${aspect}`}
                    >
                        <span className="aspect__name">{`${aspect}: ${
                            this.props.aspects[aspect] < 1
                                ? this.props.aspects[aspect].toFixed(2)
                                : this.props.aspects[aspect]
                        } (${this.ratioCalculator(
                            300,
                            300 * this.props.aspects[aspect]
                        )})`}</span>
                        <input
                            type="range"
                            value={this.props.aspects[aspect]}
                            name={aspect}
                            min="0.1"
                            max="5.0"
                            step={
                                this.props.aspects[aspect] < 1 ? "0.05" : "0.1"
                            }
                            onChange={event =>
                                this.props.changeAspect(
                                    event.target.name,
                                    parseFloat(event.target.value)
                                )
                            }
                        />
                    </div>
                ))}
                <div className="mini-aspects">
                    {Object.keys(this.props.aspects).map(aspect => (
                        <div
                            style={{
                                height: 1 * this.props.aspects[aspect] + "em"
                            }}
                            className={`mini-aspects__aspect mini-aspects__aspect--${aspect}`}
                            key={`mini-aspect-${aspect}`}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Aspect;
