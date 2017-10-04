import React, { Component } from 'react';
import Color from './Color.jsx'; 
import EditColor from './EditColor.jsx'; 

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
        ], editing: true
    }

  changeColor(colorName, colorVariant) {
    console.info("Changing color: ", colorName, colorVariant );
    let values = {  colorName, colorVariant }
    this.setState({ editValues:values });
    this.setState({ editing:true });
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
    console.log(newColors)

    this.setState({colors:newColors});
  }

  render() {
      return (
        <div className="Palette grid-container">
          <h3 className="grid-header">Palette</h3>
          {this.state.colors.map(color=><Color changeColor={this.changeColor} name={color.name} value={color.value} contrast={color.contrast} dark={color.dark} light={color.light} key={color.name}/>)}
          {this.state.editing ? <EditColor editValues={this.state.editValues} className="edit-window"/>: ''}
        </div>
      );
    }
}

export default App;
