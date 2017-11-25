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

  addColor = () => {
    const newColorValue = "#333333";
    const newColor = {
        name: "color_" + (this.state.colors.length + 1),
        locked: [],
        main: newColorValue,
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

  handleLock = (colorName, variation) => {
    let newState = this.state.colors;    
    const index = newState.findIndex(color=>(color.name === colorName));
    let tempColor = newState[index];
    let variationIndexInLocked = tempColor.locked.indexOf(variation);

    variationIndexInLocked < 0 
      ? tempColor.locked.push(variation) 
      : tempColor.locked.splice(variationIndexInLocked, 1)
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
          <FaPlus onClick={()=>{this.addColor()}}/>
        </section>
      );
    }
}

export default App;
