import React, { Component } from "react";
import { getFromObject } from "../utils/getFromObject";
import "./StyleGuide.scss";

class StyleGuide extends Component {
    styleGuide(colors) {
        let palette = [];
        for (let color in colors) {
            palette.push(
                <div className="styleguide-color">
                    <h4 className="styleguide-color__name">{color}</h4>
                    <div
                        className="styleguide-color__value"
                        style={{ backgroundColor: colors[color].value }}
                    />
                </div>
            );
        }
        return palette;
    }
    monochromes(colors) {
        let palette = [];
        for (let color in colors) {
            palette.push(
                <div
                    className="styleguide-monochrome__value"
                    style={{ backgroundColor: colors[color].value }}
                />
            );
        }
        return palette;
    }
    functional(colors) {
        let palette = [];
        for (let color in colors) {
            palette.push(
                <div
                    className="styleguide-functional__value"
                    style={{ backgroundColor: colors[color].value }}
                />
            );
        }
        return palette;
    }

    pickColors(themeColors, useColors) {
        let foundColors = [];

        return foundColors;
    }

    render() {
        return (
            <div>
                <p>Click the tabs (color, fonts etc.) to change your theme.</p>
                <div className="styleguide">
                    <section className="color">
                        <h3>Color</h3>
                        {this.styleGuide(
                            getFromObject(this.props.colors, [
                                "brand",
                                "main",
                                "support"
                            ])
                        )}
                        <br />
                        <div className="styleguide-monochrome">
                            {this.monochromes(
                                getFromObject(this.props.colors, [
                                    "black",
                                    "white",
                                    "gray"
                                ])
                            )}
                        </div>
                        <br />
                        <div className="styleguide-functional">
                            {this.functional(
                                getFromObject(this.props.colors, [
                                    "success",
                                    "alert",
                                    "info",
                                    "warn"
                                ])
                            )}
                        </div>
                    </section>
                    <section>
                        <h3>Typography</h3>
                    </section>
                    <section>
                        <h3>Chunks of something</h3>
                    </section>
                </div>
            </div>
        );
    }
}

export default StyleGuide;
