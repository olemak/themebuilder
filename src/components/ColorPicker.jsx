import React, { PureComponent } from "react";
import { SketchPicker } from "react-color";

class ColorPicker extends PureComponent {
    render() {
        return (
            <div
                className="color-picker__wrapper"
                style={{
                    justifyContent: `space-${this.props.moveValue}`
                }}
            >
                <div className="color-picker__inner">
                    <h3 className="color-picker__title">{`Edit ${
                        this.props.colorName
                    } ${this.props.variation}`}</h3>
                    <SketchPicker
                        color={this.props.colorValue}
                        onChangeComplete={this.props.handleColorChangeComplete}
                        disableAlpha={true}
                    />
                    <button
                        className="color-picker__button color-picker__button--move"
                        onClick={this.props.toggleMove}
                    >
                        {this.props.moveValue === "around"
                            ? "move left"
                            : "center"}
                    </button>
                    <button
                        className="color-picker__button color-picker__button--close"
                        onClick={this.props.togglePicker}
                    >
                        close
                    </button>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
