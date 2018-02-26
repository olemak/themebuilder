import React, { PureComponent } from "react";
import { calculatedTextStyle } from "../utils/calculatedTextStyle";

class PreviewTypography extends PureComponent {
    presetStyle(presets, currentPreset) {
        const preset = presets[currentPreset];
        return {
            fontSize: `${this.props.sizes[preset.size]}em`,
            fontFamily: this.props.fonts[preset.font].family,
            fontWeight: preset.weight
        };
    }

    render() {
        return (
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
}

export { PreviewTypography };
