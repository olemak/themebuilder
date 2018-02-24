import React, { Component } from "react";

import theme from "../theme.json";

class TextColor extends Component {
    themeTextColors() {
        let textColors = [];
        for (let color in theme.colors) {
            let colorClasses = `text-color__${color}`;
            let backgroundColorClasses = `text-background--${color}`;
            let variants = Object.keys(theme.colors[color]);
            textColors.push(
                <section
                    className="text story--text"
                    key={`text-color--${color}`}
                >
                    <p>
                        {colorClasses}
                        <br />
                        <span className={colorClasses}>
                            {`${color} color on neutral background`}
                        </span>

                        {variants.map(variant => (
                            <div>
                                <span className="story--classname">
                                    {colorClasses + "--" + variant}
                                </span>
                                <span className={colorClasses + "--" + variant}>
                                    {`${color} ${variant}`}
                                </span>
                            </div>
                        ))}
                    </p>

                    <p>
                        {backgroundColorClasses}
                        <br />
                        <span className={backgroundColorClasses}>
                            {`${color} color on contrast background`}
                        </span>
                    </p>
                </section>
            );
        }
        return textColors;
    }

    render() {
        return <div>{this.themeTextColors()}</div>;
    }
}

export default TextColor;
