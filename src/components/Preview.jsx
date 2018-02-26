import React, { Component } from "react";

import { PreviewColors } from "./PreviewColors";
import { PreviewTypography } from "./PreviewTypography";
import "./preview.scss";

class Preview extends Component {
    render() {
        return (
            <div>
                <p>Click the tabs (color, fonts etc.) to change your theme.</p>
                <div className="preview">
                    <PreviewColors
                        className="preview__colors"
                        colors={this.props.colors}
                    />

                    <PreviewTypography
                        className="preview__typography"
                        typography={this.props.typography}
                        sizes={this.props.sizes}
                        fonts={this.props.fonts}
                    />

                    <section className="preview__sizes">
                        <h3>Sizes</h3>
                    </section>
                </div>
            </div>
        );
    }
}

export default Preview;
