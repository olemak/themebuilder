/* eslint no-unused-expressions: 0 */

import React, { Component } from "react";

// COMPONENTS
import Color from "./Color.jsx";

// UTILITIES
import invertColor from "../utils/invertColor.js";
import shadeColor from "../utils/shadeColor.js";

import "./Palette.css";

class Palette extends Component {
    componentWillMount() {
        for (let color in this.props.colors) {
            this.props.changeColor(
                color,
                "contrast",
                invertColor(this.props.colors[color].value)
            );
            this.props.changeColor(
                color,
                "light",
                shadeColor(this.props.colors[color].value, 25)
            );
            this.props.changeColor(
                color,
                "dark",
                shadeColor(this.props.colors[color].value, -25)
            );
        }
    }

    paint(colors) {
        let colorElements = [];
        for (let color in colors) {
            colorElements.push(
                <Color
                    handleColorChange={this.props.changeColor}
                    color={colors[color]}
                    name={color}
                    key={color}
                />
            );
        }
        return colorElements;
    }

    render() {
        return (
            <section className="Palette">
                <h3 className="palette__header">Palette</h3>
                {this.paint(this.props.colors)}
            </section>
        );
    }
}

export default Palette;
