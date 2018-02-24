import React, { Component } from "react";
import ColorVariation from "./ColorVariation";

// UTILITIES
import invertColor from "../utils/invertColor.js";
import shadeColor from "../utils/shadeColor.js";

import "./Color.css";

class Color extends Component {
    componentWillUpdate(nextProps, nextState) {
        if (
            nextProps.color.value &&
            this.props.color.value !== nextProps.color.value
        ) {
            this.props.handleColorChange(
                this.props.name,
                "contrast",
                invertColor(nextProps.color.value)
            );
            this.props.handleColorChange(
                this.props.name,
                "light",
                shadeColor(nextProps.color.value, 25)
            );
            this.props.handleColorChange(
                this.props.name,
                "dark",
                shadeColor(nextProps.color.value, -25)
            );
        }
    }

    render() {
        return (
            <div className="Color grid-body grid-container">
                <h3 className="color__name">{this.props.name}</h3>
                {Object.keys(this.props.color).map(variation => (
                    <ColorVariation
                        variation={variation}
                        color={this.props.color}
                        colorValue={this.props.color[variation]}
                        handleColorChange={this.props.handleColorChange}
                        colorName={this.props.name}
                        key={`${this.props.name}-${variation}`}
                    />
                ))}
            </div>
        );
    }
}

export default Color;
