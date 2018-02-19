import React, { Component } from 'react';
import presetInfo from '../data/presetInfo.json';

const presetDefaults = {};
presetInfo.map(preset=>{Object.assign(presetDefaults, {[preset.id]: false })})


class Typography extends Component {
    constructor(props) {
        super(props);
        this.state = {presetDefaults};
    }

    toggleShow = event => {
        this.setState({[event.target.id]: !this.state[event.target.id]})
    }

    render() {
        console.log(presetInfo);
        return (
            <div className="Typography">
                {presetInfo.map(preset=><section key={preset.id}>
                    <div>
                        <span className={`preset__sample preset__sample--${preset.id}`}>{preset.name}</span>
                    </div>
                    <input type="checkbox" onChange={this.toggleShow} id={preset.id} />
                    <label htmlFor={preset.id}>show details</label>
                    {this.state[preset.id] ? 
                    <div>
                        <em className="preset__intro">{preset.intro}</em> 
                        <p className="preset__description">{preset.description}</p>
                    </div> : ""}
                </section>
                )}
            </div>
        );
    }
}

export default Typography;