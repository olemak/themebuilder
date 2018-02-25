import React, { Component } from "react";

import { PreviewColors } from "./PreviewColors";
import "./preview.scss";

class Preview extends Component {
    render() {
        return (
            <div>
                <p>Click the tabs (color, fonts etc.) to change your theme.</p>
                <div className="preview">
                    <PreviewColors
                        className="preview__color"
                        colors={this.props.colors}
                    />

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

export default Preview;
