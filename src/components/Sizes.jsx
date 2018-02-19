import React, { Component } from 'react';
import "./spacing.css"
import "./sizes.css"

function Size ({name, value, changeSize, prev, next}) {
    return <div className="space">
        <label className="space__label">{name}</label>
        <input 
            type="range" 
            value={value} 
            min={prev} 
            max={next}
            step={0.1}
            id={`space-${name}`}
            onChange={
                event => changeSize(name, parseFloat(event.target.value))
            }
        />
        <output className="space__output" htmlFor={`space-${name}`}>{value.toFixed(1)}</output> 

 </div>
}

function textSizeExamples(sizes) {
    let paragraphs = [];
    for (let size in sizes) {
        paragraphs.push(<p style={{fontSize: `${sizes[size]*100}%` }}>{`${size}: Superheroic Motorcycle Challengers`}</p>)
    }
    return paragraphs;
}

class Sizes extends Component {

    paint(sizes) {
        let sizeValues = [];
        let values = [sizes.tiny, sizes.small, sizes.medium, sizes.large, sizes.huge];
        let i = 0;
        for (const size in sizes) {
           sizeValues.push(<Size
                name={size} 
                value={this.props.sizes[size]} 
                changeSize={this.props.changeSize} 
                prev={(i === 0 ? 0.6 : values[(i - 1)])}
                index = {`index:${i} values.length:${values.length}`}
                next={(i === values.length - 1 ? 10 : values[++i])}
                key={`size-${size}`}
            />)
        }
        return sizeValues;
    }


    render() {
        return (
            <div className="Spacing Sizes">
                <h3 className="Spacing__header">Sizes</h3>
                {this.paint(this.props.sizes)}
                <hr />
                <h3>Title</h3>
                {textSizeExamples(this.props.sizes)}
            </div>
        );
    }
}

export default Sizes;