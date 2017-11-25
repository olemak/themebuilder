/* eslint no-unused-expressions: 0 */

import React, { Component } from 'react';

// COMPONENTS
import Color from './Color.jsx'; 
import FaPlus from 'react-icons/lib/fa/plus';

// UTILITIES
import invertColor from '../utils/invertColor.js';
import shadeColor from '../utils/shadeColor.js';
import addColor from '../utils/addColor.js';
import handleColorChange from '../utils/handleColorChange.js';
import handleLock from '../utils/handleLock.js';

import './Palette.css';

class App extends Component {
  addColor = addColor.bind(this);
  handleColorChange = handleColorChange.bind(this);
  handleLock = handleLock.bind(this);

    state = {
      colors: [
          {
            name: "brand", // main, mono, function,
            main: "#123456",
            contrast: "#EDCBA9",
            dark: "#0d2740",
            light: "#16416b"
          }, {
            name: "primary", // ... mono, function,
            main: "#345612"
        }
        ] 
    }



  handleDrag = (colorName, colorVariant, colorValue) => {
    console.log("DRAGGING: ",colorName, colorVariant, colorValue);
  }
  
  handleDrop = (colorName, colorVariant, colorValue) => {
    console.log("DROPPING: ",colorName, colorVariant, colorValue);
  }
  
  updateDependentColors = (color) => {
    if (color.dependents) {
      color.dependents
    }
  }

  componentDidMount() {
    let newColors = [];
    this.state.colors.map(color=>{
      let newColor = {
        name: color.name,
        locked: [],
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

  render() {
      return (
        <section className="Palette">
          <h3 className="palette__header">Palette</h3>
          {this.state.colors.map(color=><Color handleColorChange={this.handleColorChange} handleLock={this.handleLock} color={color} key={color.name}/>)}
          <FaPlus onClick={()=>{addColor()}}/>
        </section>
      );
    }
}

export default App;
