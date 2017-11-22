/* eslint no-unused-expressions: 0 */

import React, { Component } from 'react';

// COMPONENTS
import Color from './Color.jsx'; 
import FaPlus from 'react-icons/lib/fa/plus';

// UTILITIES
import invertColor from '../utils/invertColor.js';
import shadeColor from '../utils/shadeColor.js';

import './Palette.css';

class App extends Component {
    state = {
      colors: [
          {
            name: "brand", // main, mono, function
            value: "#123456",
            contrast: "#EDCBA9",
            dark: "#0d2740",
            light: "#16416b"
          }, {
            name: "main", // ... mono, function
            value: "#345612"
        }
        ] 
    }

  addColor = () => {
    const newColorValue = "#333333";
    const newColor = {
        name: "color_" + (this.state.colors.length + 1),
        value: newColorValue,
        contrast: invertColor(newColorValue),
        light: shadeColor(newColorValue, 25),
        dark: shadeColor(newColorValue, -25),
    };
    let colors = this.state.colors;
        colors.push(newColor);
      this.setState({colors: colors})
  }

  handleColorChange = (colorName, colorVariant, colorValue) => {
    this.setState({editing: false});

    let newColorState = this.state.colors;    
    const index = newColorState.findIndex(color=>(color.name === colorName));
    let tempColor = newColorState[index];
        tempColor[colorVariant] = colorValue;

    newColorState.splice(index, 1, tempColor);

    this.setState({colors: newColorState});
  }

  handleLock = colorName => {
    console.log("LOCKING: ",colorName);

    let newState = this.state.colors;    
    const index = newState.findIndex(color=>(color.name === colorName));
    let tempColor = newState[index];
        tempColor.locked = !tempColor.locked;

    newState.splice(index, 1, tempColor);

    this.setState({colors: newState});

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
        value: color.value,
        contrast: invertColor(color.value),
        light: shadeColor(color.value, 25),
        dark: shadeColor(color.value, -25),
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
          {this.state.colors.map(color=><Color handleColorChange={this.handleColorChange} handleLock={this.handleLock} name={color.name} value={color.value} contrast={color.contrast} dark={color.dark} light={color.light} locked={color.locked} key={color.name}/>)}
          <FaPlus onClick={()=>{this.addColor()}}/>
        </section>
      );
    }
}

export default App;
