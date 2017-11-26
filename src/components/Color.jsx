import React, { Component } from 'react';
import ColorVariation from './ColorVariation';
import './Color.css';

class Color extends Component {

  render() {
    return (
        <div className="Color grid-body grid-container">
            <h3 className="color__name">{this.props.color.name}</h3>
            { Object.keys(this.props.color).splice(1).map(variation=>
                <ColorVariation 
                  index={variation}
                  color={this.props.color}
                  handleColorChange = {this.props.handleColorChange}
                  key={`${this.props.color.name}-${variation}`}
                />
            )}
        </div>
    );
  }
}

export default Color;
