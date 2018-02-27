import React, { PureComponent } from "react";
import { calculatedTextStyle } from "../utils/calculatedTextStyle";

export class PreviewTypography extends PureComponent {
    render = () => (
        <section className={this.props.className}>
            {Object.keys(this.props.typography).map(presetName => (
                <div key={`preview-typograph-${presetName}`}>
                    <span
                        className="preview__preset"
                        style={calculatedTextStyle(
                            presetName,
                            this.props.fonts,
                            this.props.typography,
                            this.props.sizes
                        )}
                    >
                        {presetName}
                        {presetName === "main" || presetName === "support"
                            ? " title"
                            : ""}
                    </span>
                </div>
            ))}
        </section>
    );
}
