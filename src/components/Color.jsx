import React, { Component } from 'react';
import ColorVariation from './ColorVariation';

// UTILITIES
import invertColor from '../utils/invertColor.js';
import shadeColor from '../utils/shadeColor.js';

import './Color.css';

class Color extends Component {

  componentWillUpdate(nextProps, nextState){
    if (this.props.color.main !== nextProps.color.main) {
      this.props.handleColorChange(nextProps.index, "contrast", invertColor(nextProps.color.main));
      this.props.handleColorChange(nextProps.index, "light", shadeColor(nextProps.color.main, 25));
      this.props.handleColorChange(nextProps.index, "dark", shadeColor(nextProps.color.main, -25));
    }
  }


  render() {
    return (
        <div className="Color grid-body grid-container">
            <h3 className="color__name">{this.props.color.name}</h3>
            { Object.keys(this.props.color).splice(1).map(variation=>
                <ColorVariation 
                  index={this.props.index}
                  variation={variation}
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
