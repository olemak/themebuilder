import React, { PureComponent } from "react";

class PreviewColorSingle extends PureComponent {
    render() {
        return (
            <div
                className={this.props.className}
                style={{ backgroundColor: this.props.color.value }}
            >
                <h4
                    className="preview-color__name"
                    style={{ color: this.props.color.contrast }}
                >
                    {this.props.color.name}
                </h4>
            </div>
        );
    }
}

export default PreviewColorSingle;
