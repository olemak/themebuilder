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

    toggleShow = event => {
        this.setState({[event.target.id]: !this.state[event.target.id]})
    }

    makeInputs = (preset, sizes) => {
        let sizeInputs = [];
        for (let size in sizes){
            sizeInputs.push(
                <span>
                    <input type="radio" id={`${preset}-main-font-size`} name="font-size" value="{size}" />
                    <label id={`${preset}-main-font-size`}>{size}</label>
                </span>
            )
        }
        return sizeInputs;
    }

    render() {
        console.log(presetInfo);
        return (
            <div className="Typography">
                {presetInfo.map(preset=><section className="typography__preset" key={preset.id}>
                    
                    <div>
                        <span className={`preset__sample preset__sample--${preset.id}`}>{preset.name}</span>
                    </div>
                    <input type="checkbox" onChange={this.toggleShow} id={preset.id} />
                    <label htmlFor={preset.id}>show details</label>
                    {this.state[preset.id] ? 
                    <div>
                        <em className="preset__intro">{preset.intro}</em> 
                        <p className="preset__description">{preset.description}</p>
                        <form>
                            <div>
                                <input type="radio" id={`${preset}-main-font-family`} name="font-family" value="main" />
                                <label id={`${preset}-main-font-family`}>Main Font</label>

                                <input type="radio" id={`${preset}-support-font-family`} name="font-family" value="support" />
                                <label id={`${preset}-support-font-family`}>Support Font</label>
                            </div>
                            <div>
                                {this.makeInputs(preset, this.props.sizes)}
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