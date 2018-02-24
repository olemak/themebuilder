import React, { Component } from "react";
import { SketchPicker } from "react-color";
import { getContrast } from "../utils/contrastRatio.js";
import FaEdit from "react-icons/lib/fa/pencil";

class ColorVariation extends Component {
    state = {
        pickerVisible: false,
        moveValue: "around"
    };

    handleColorChangeComplete = color => {
        this.props.handleColorChange(
            this.props.colorName,
            this.props.variation,
            color.hex
        );
    };

    togglePicker = () => {
        this.setState({
            pickerVisible: !this.state.pickerVisible
        });
    };

    toggleMove = () => {
        this.setState({
            moveValue: this.state.moveValue === "around" ? "between" : "around"
        });
    };

    render() {
        return (
            <div
                style={{ backgroundColor: this.props.colorValue }}
                className={`color color--${this.props.variation}`}
            >
                <FaEdit
                    color={
                        this.props.variation === "contrast"
                            ? this.props.color.value
                            : this.props.color.contrast
                    }
                    onClick={this.togglePicker}
                />
                {this.state.pickerVisible ? (
                    <div
                        className="color-picker__wrapper"
                        style={{
                            justifyContent: `space-${this.state.moveValue}`
                        }}
                    >
                        <div className="color-picker__inner">
                            <h3 className="color-picker__title">{`Edit ${
                                this.props.colorName
                            } ${this.props.variation}`}</h3>
                            <SketchPicker
                                color={this.props.colorValue}
                                onChangeComplete={
                                    this.handleColorChangeComplete
                                }
                                disableAlpha={true}
                            />
                            <button
                                className="color-picker__button color-picker__button--move"
                                onClick={this.toggleMove}
                            >
                                {this.state.moveValue === "around"
                                    ? "move left"
                                    : "center"}
                            </button>
                            <button
                                className="color-picker__button color-picker__button--close"
                                onClick={this.togglePicker}
                            >
                                close
                            </button>
                        </div>
                    </div>
                ) : (
                    ""
                )}

                {this.props.variation === "contrast" &&
                getContrast(this.props.color.value, this.props.color.contrast) <
                    4.5 ? (
                    <p className="color__warning color__warning--contrast">
                        {getContrast(
                            this.props.color.value,
                            this.props.color.contrast
                        ) < 3.5
                            ? "Alert! Contrast too low: "
                            : "Warning - low contrast: "}
                        {getContrast(
                            this.props.color.value,
                            this.props.color.contrast
                        )}
                    </p>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default ColorVariation;
