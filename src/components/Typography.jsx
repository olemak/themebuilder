import React, { Component } from "react";
import presetInfo from "../data/presetInfo.json";
import { calculatedTextStyle } from "../utils/calculatedTextStyle";
import "./typography.css";
const presetDefaults = {};

presetInfo.map(preset => Object.assign(presetDefaults, { [preset.id]: false }));

class Typography extends Component {
    constructor(props) {
        super(props);
        this.state = { presetDefaults };
    }

    changePreset = event => {
        this.props.changePreset(
            event.target.id.split("-").shift(),
            event.target.name,
            event.target.value
        );
    };

    toggleShow = event => {
        this.setState({ [event.target.id]: !this.state[event.target.id] });
    };

    makeInputs = (preset, parameterName, fontVariation = false) => {
        let inputs = [
            <span
                key={`${preset}-${parameterName}`}
            >{`${parameterName}: `}</span>
        ];
        let parameterValues;
        switch (parameterName) {
            case "font":
                parameterValues = this.props.fonts;
                break;
            case "size":
                parameterValues = this.props.sizes;
                break;
            case "weight":
                parameterValues = this.props.fonts[
                    fontVariation
                ].selectedVariants.sort();
                break;

            default:
                parameterValues = [];
                break;
        }

        for (let value in parameterValues) {
            let returnValue = fontVariation ? parameterValues[value] : value;
            inputs.push(
                <input
                    type="radio"
                    id={`${preset}-${parameterName}-${value}`}
                    name={parameterName}
                    value={returnValue}
                    onChange={this.changePreset}
                    key={`${preset}-${parameterName}-${value}-input`}
                />
            );
            inputs.push(
                <label
                    id={`${preset}-${parameterName}-${value}`}
                    key={`${preset}-${parameterName}-${value}-label`}
                >
                    {returnValue}
                </label>
            );
        }
        return inputs;
    };

    render() {
        return (
            <div className="Typography">
                {presetInfo.map(preset => (
                    <section className="typography__preset" key={preset.id}>
                        <div>
                            <span
                                className={`preset__sample preset__sample--${
                                    preset.id
                                }`}
                                style={calculatedTextStyle(
                                    preset.id,
                                    this.props.fonts,
                                    this.props.typography,
                                    this.props.sizes
                                )}
                            >
                                {preset.name}
                            </span>
                        </div>
                        <input
                            type="checkbox"
                            onChange={this.toggleShow}
                            id={preset.id}
                        />
                        <label htmlFor={preset.id}>show details</label>
                        {this.state[preset.id] ? (
                            <div>
                                <em className="preset__intro">
                                    {preset.intro}
                                </em>
                                <p className="preset__description">
                                    {preset.description}
                                </p>
                                <form>
                                    <div>
                                        {this.makeInputs(preset.id, "font")}
                                    </div>
                                    <div>
                                        {this.makeInputs(preset.id, "size")}
                                    </div>
                                    <div>
                                        {this.makeInputs(
                                            preset.id,
                                            "weight",
                                            this.props.typography[preset.id]
                                                .font
                                        )}
                                    </div>
                                </form>
                            </div>
                        ) : (
                            ""
                        )}
                    </section>
                ))}
            </div>
        );
    }
}

export default Typography;
