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

import './Palette.css';

class App extends Component {
  addColor = addColor.bind(this);
  handleColorChange = handleColorChange.bind(this);

    state = {
      colors: [
          {
            name: "brand",
            main: "#123456",
          }, {
            name: "primary",
            main: "#345612"
        }
        ]
    }

  componentDidMount() {
    let newColors = [];
    this.state.colors.map(color=>{
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

  render() {
      return (
        <section className="Palette">
          <h3 className="palette__header">Palette</h3>
          {this.state.colors.map(color=><Color handleColorChange={this.handleColorChange} color={color} key={color.name}/>)}
          <FaPlus className="palette__add" onClick={()=>{this.addColor()}}/>
        </section>
      );
    }
}

export default App;
