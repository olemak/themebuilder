/* eslint no-unused-expressions: 0 */

import React, { Component } from "react";

// COMPONENTS
import Color from "./Color.jsx";

import "./Palette.css";

class Palette extends Component {
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
                {this.paint(this.props.colors)}
            </section>
        );
    }
}

export default Palette;
