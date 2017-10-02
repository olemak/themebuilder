import React, { Component } from 'react';
import Color from './Color.jsx'; 
import Colors from '../data/Colors'; 
import './Palette.css';

class App extends Component {
    state = {
      colors: [
          {
            name: "brand",
            value: "#123456",
            contrast: "#123456",
            dark: "#123456",
            light: "#123456"
          },
          {
            name: "main",
            value: "#123456",
            contrast: "#123456",
            dark: "#123456",
            light: "#123456"
          },
          {
            name: "support",
            value: "#123456",
            contrast: "#123456",
            dark: "#123456",
            light: "#123456"
          },
          {
            name: "black",
            value: "#000033",
            contrast: "#123456",
            dark: "#123456",
            light: "#123456"
          },
          {
            name: "white",
            value: "#FFFF33",
            contrast: "#123456",
            dark: "#123456",
            light: "#123456"
          },
          {
            name: "gray",
            value: "#333333"
          },
        ]
    }
  
    changeColor(name,value){
      console.info("Changing color: ", name, value );
//      this.setState({color[name]:value});
    }

    render() {
      console.log(Colors);
      return (
        <div className="Palette grid-container">
          <h3 className="grid-header">Palette</h3>
          {this.state.colors.map(color=><Color changeColor={this.changeColor} name={color.name} value={color.value} contrast={color.contrast} dark={color.dark} light={color.light}/>)}
        </div>
      );
    }
}

export default App;
