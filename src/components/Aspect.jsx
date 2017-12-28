import React, { Component } from 'react';
import './aspect.css';

class Aspect extends Component {

    ratioCalculator (height, width) {
        const divisor = this.greatestCommonDivisor(height, width);
        return `${width / divisor}:${height / divisor}`;
    }

    greatestCommonDivisor (height,width) {
        if (width === 0) return height
        return this.greatestCommonDivisor (width, height % width)
    }

    render() {
        return (
            <div className="Aspect">
                {this.props.aspects.map(aspect=><div 
                    style={{height: 300*aspect.ratio + "px"}}
                    className={`aspect aspect--${aspect.name}`}
                    key={`aspect-${aspect.name}`}>
                        <span className="aspect__name">{`${aspect.name}: ${(aspect.ratio < 1 ? aspect.ratio.toFixed(2) : aspect.ratio)} (${this.ratioCalculator(300, 300*aspect.ratio)})`}</span>
                        <input 
                            type="range" 
                            value={aspect.ratio} 
                            name={aspect.name} 
                            min="0.1" 
                            max="5.0" 
                            step={aspect.ratio < 1 ?"0.05":"0.1"} 
                            onChange={
                                event => this.props.changeAspect(event.target.name, parseFloat(event.target.value))
                            }
                        />
                </div>)}
                <div className="mini-aspects">
                    {this.props.aspects.map(aspect=><div 
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