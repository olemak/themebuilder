import React, { Component } from "react";
import ColorPicker from "./ColorPicker";
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
                    <ColorPicker
                        colorValue={this.props.colorValue}
                        colorName={this.props.colorName}
                        variation={this.props.variation}
                        handleColorChangeComplete={
                            this.handleColorChangeComplete
                        }
                        togglePicker={this.togglePicker}
                        moveValue={this.state.moveValue}
                        toggleMove={this.toggleMove}
                    />
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
