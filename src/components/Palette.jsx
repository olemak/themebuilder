import React, { Component } from 'react';

// COMPONENTS
import Color from './Color.jsx'; 
import EditColor from './EditColor.jsx'; 

// UTILITIES
import invertColor from '../utils/invertColor.js';
import shadeColor from '../utils/shadeColor.js';

import './Palette.css';

class App extends Component {
    state = {
      colors: [
          {
            name: "brand",
            value: "#123456",
          },
          {
            name: "main",
            value: "#96858F",
          },
          {
            name: "support",
            value: "#6D7993",
          },
          {
            name: "black",
            value: "#000033",
          },
          {
            name: "white",
            value: "#D5D5D5",
          },
          {
            name: "gray",
            value: "#9099A2"
          },
        ], 
        editing: false
    }

  changeColor = (colorName, colorVariant) => {
    console.info("Changing color: ", colorName, colorVariant );
    let values = {  colorName, colorVariant };
    values.currentValue = this.state.colors.find(color => (colorName === color.name))[colorVariant];
    this.setState({ editValues:values });
    this.setState({ editing:true });
  }
  
  handleColorChange = (colorName, colorVariant, colorValue) => {
    this.setState({editing: false});

    let newColorState = this.state.colors;    
    const index = newColorState.findIndex(color=>(color.name === colorName));
    let tempColor = newColorState[index];
    // insert the correct values here, in TEMPCOLOR!

    console.log(tempColor);
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
        <div className="Palette grid-container">
          <h3 className="grid-header">Palette</h3>
          {this.state.colors.map(color=><Color changeColor={this.changeColor} name={color.name} value={color.value} contrast={color.contrast} dark={color.dark} light={color.light} key={color.name}/>)}
          {this.state.editing ? <EditColor editValues={this.state.editValues} className="edit-window" handleColorChange={this.handleColorChange} />: ''}
        </div>
      );
    }
}

export default App;
