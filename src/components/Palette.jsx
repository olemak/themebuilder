/* eslint no-unused-expressions: 0 */

import React, { Component } from 'react';

// COMPONENTS
import Color from './Color.jsx'; 

// UTILITIES
//import invertColor from '../utils/invertColor.js';
//import shadeColor from '../utils/shadeColor.js';
//import addColor from '../utils/addColor.js';
//import handleColorChange from '../utils/handleColorChange.js';

import './Palette.css';

class Palette extends Component {
//  addColor = addColor.bind(this);
//  handleColorChange = handleColorChange.bind(this);

  /*
  componentDidMount() {
    let newColors = [];
    this.props.colors.map(color=>{
      let newColor = {
        name: color.name,
        main: color.main,
        contrast: invertColor(color.main),
        light: shadeColor(color.main, 25),
        dark: shadeColor(color.main, -25),
      }
      newColors.push(newColor);      
      return true;
    })
    this.setState({colors:newColors});
  }
  */

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
