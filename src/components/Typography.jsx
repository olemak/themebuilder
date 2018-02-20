import React, { Component } from 'react';
import presetInfo from '../data/presetInfo.json';
import "./typography.css";
const presetDefaults = {};

presetInfo.map(preset=>Object.assign(presetDefaults, {[preset.id]: false }))


class Typography extends Component {
    constructor(props) {
        super(props);
        this.state = {presetDefaults};
    }

    changePreset = event => {
        console.log(event.target.name, event.target.value);
        this.props.changePreset(event.target.id.split('-').shift(), event.target.name, event.target.value)
    }

    toggleShow = event => {
        this.setState({[event.target.id]: !this.state[event.target.id]})
    }

    makeInputs = (preset, ParameterName) => {
        let inputs = [<span>{`${ParameterName}: `}</span>];
        let parameterValues;
        switch (ParameterName) {
            case 'font':
                parameterValues = this.props.fonts;
                break;
            case 'size':
                parameterValues = this.props.sizes;
                break;
                
                default:
                parameterValues = [];
                break;
        }

        for (let value in parameterValues){
            inputs.push (
                <input type="radio" id={`${preset}-${ParameterName}-${value}`} name={ParameterName} value={value} onChange={this.changePreset}/>
            )
            inputs.push (
                <label id={`${preset}-${ParameterName}-${value}`}>{value}</label>
            )
        }
        return inputs;
    }

    render() {
        return (
            <div className="Typography">
                {presetInfo.map(preset=><section className="typography__preset" key={preset.id}>
                    
                    <div>
                        <span className={`preset__sample preset__sample--${preset.id}`} style={
                            {
                                fontFamily: this.props.fonts[this.props.typography[preset.id].font].family,
                                weight:     this.props.typography[preset.id].weight,
                                fontSize:   `${this.props.sizes[this.props.typography[preset.id].size]*100}%`
                            }
                            }>{preset.name}</span>
                    </div>
                    <input type="checkbox" onChange={this.toggleShow} id={preset.id} />
                    <label htmlFor={preset.id}>show details</label>
                    {this.state[preset.id] ? 
                    <div>
                        <em className="preset__intro">{preset.intro}</em> 
                        <p className="preset__description">{preset.description}</p>
                        <form>
                            <div>
                                {this.makeInputs(preset.id, "font")}
                            </div>
                            <div>
                                {this.makeInputs(preset.id, "size")}
                            </div>

                        </form>
                    </div> : ""}
                </section>
                )}
            </div>
        );
    }
}

export default Typography;