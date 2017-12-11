/* eslint no-unused-expressions: 0 */

import React, { Component } from 'react';

// COMPONENTS
import Color from './Color.jsx'; 

// UTILITIES
import invertColor from '../utils/invertColor.js';
import shadeColor from '../utils/shadeColor.js';

import './Palette.css';

class Palette extends Component {

  componentWillMount() {
    this.props.colors.map((color, i)=>{
      this.props.changeColor(i, "contrast", invertColor(color.main));
      this.props.changeColor(i, "light", shadeColor(color.main, 25));
      this.props.changeColor(i, "dark", shadeColor(color.main, -25));
      return true;
    })
  }

  render() {
      return (
        <section className="Palette">
          <h3 className="palette__header">Palette</h3>
          {this.props.colors.map((color, index)=><Color handleColorChange={this.props.changeColor} index={index} color={color} key={color.name}/>)}
        </section>
      );
    }
}

export default Palette;
