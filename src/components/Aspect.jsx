import React, { Component } from 'react';
import './aspect.css';

class Aspect extends Component {
    state = {
        aspects: [
            {name: "banner",        ratio: 0.25},
            {name: "wide",          ratio: 0.5},
            {name: "landscape",     ratio: 0.6},
            {name: "square",        ratio: 1.0},
            {name: "portrait",       ratio: 1.3},
            {name: "tall",          ratio: 2.0},
            {name: "skyscraper",    ratio: 4.0},
        ]
    }


    ratioCalculator (height, width) {
        const divisor = this.greatestCommonDivisor(height, width);
        return `${width / divisor}:${height / divisor}`;
    }

    greatestCommonDivisor (height,width) {
        if (width === 0) return height
        return this.greatestCommonDivisor (width, height % width)
    }

    handleApectChange = event => {
        console.log(event.target.name, ": ", event.target.value);
        let newAspectState = this.state.aspects;
        let newAspectValue = {name: event.target.name, ratio: parseFloat(event.target.value)};
        let adjustedAspectIndex = newAspectState.findIndex(aspect => aspect.name === event.target.name);

        newAspectState.splice(adjustedAspectIndex, 1, newAspectValue);

        this.setState({aspects: newAspectState});
        
    }

    render() {
        return (
            <div className="Aspect">
                {this.state.aspects.map(aspect=><div 
                    style={{height: 300*aspect.ratio + "px"}}
                    className={`aspect aspect--${aspect.name}`}
                    key={`aspect-${aspect.name}`}>
                        <span className="aspect__name">{`${aspect.name}: ${aspect.ratio} (${this.ratioCalculator(300, 300*aspect.ratio)})`}</span>
                        <input type="range" value={aspect.ratio} name={aspect.name} min="0.1" max="5.0" step="0.1" onChange={this.handleApectChange}/>
                </div>)}
                <div className="mini-aspects">
                    {this.state.aspects.map(aspect=><div 
                        style={{height: 1*aspect.ratio + "em"}}
                        className={`mini-aspects__aspect mini-aspects__aspect--${aspect.name}`}
                        key={`mini-aspect-${aspect.name}`}>
                </div>)}
                    
                </div>


            </div>
        );
    }
}

export default Aspect;