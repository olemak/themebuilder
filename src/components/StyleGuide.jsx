import React, { Component } from "react";

import "./StyleGuide.scss";

class StyleGuide extends Component {
    styleGuide(colors) {
        let palette = [];
        for (let color in colors) {
            palette.push(
                <div className="styleguide">
                    <h4>{color}</h4>
                    <div
                        className="styleguide__color styleguide__color--value"
                        style={{ backgroundColor: colors[color].value }}
                    />
                    <div
                        className="styleguide__color styleguide__color--contrast"
                        style={{ backgroundColor: colors[color].value }}
                    />
                </div>
            );
        }
        return palette;
    }

    render() {
        return (
            <div>
                <h2>Style Guide</h2>
                <p>Change things in the tabs (color, fonts etc. to update).</p>
                <h3>Color</h3>
                <section className="grid">
                    {this.styleGuide(this.props.colors)}
                </section>
            </div>
        );
    }
}

export default StyleGuide;
