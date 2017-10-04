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
          },
          {
            name: "main",
            value: "#123456",
          },
          {
            name: "support",
            value: "#123456",
          },
          {
            name: "black",
            value: "#000033",
          },
          {
            name: "white",
            value: "#FFFF33",
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


    shadeColor(color, percent) {
      var R = parseInt(color.substring(1,3),16);
      var G = parseInt(color.substring(3,5),16);
      var B = parseInt(color.substring(5,7),16);

      R = parseInt(R * (100 + percent) / 100);
      G = parseInt(G * (100 + percent) / 100);
      B = parseInt(B * (100 + percent) / 100);

      R = (R<255)?R:255;  
      G = (G<255)?G:255;  
      B = (B<255)?B:255;  

      var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
      var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
      var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

      return "#"+RR+GG+BB;
    }

    invertColor(hexnum){
      if(hexnum[0] === "#") {
        hexnum = hexnum.substr(1);
      }
      if(hexnum.length != 6) {
        console.error("Hex color must be six hex numbers in length.");
        return false;
      }

      hexnum = hexnum.toUpperCase();
      var splitnum = hexnum.split("");
      var resultnum = "#";
      var simplenum = "FEDCBA9876".split("");
      var complexnum = new Array();
      complexnum.A = "5";
      complexnum.B = "4";
      complexnum.C = "3";
      complexnum.D = "2";
      complexnum.E = "1";
      complexnum.F = "0";

      for(let i=0; i<6; i++){
        if(!isNaN(splitnum[i])) {
          resultnum += simplenum[splitnum[i]]; 
        } else if(complexnum[splitnum[i]]){
          resultnum += complexnum[splitnum[i]]; 
        } else {
          console.error("Hex colors must only include hex numbers 0-9, and A-F");
          return false;
        }
      }      

      return resultnum;
  }

  componentDidMount() {
    let newColors = [];
    this.state.colors.map(color=>{
      let newColor = {
        name: color.name,
        value: color.value,
        contrast: this.invertColor(color.value),
        light: this.shadeColor(color.value, 25),
        dark: this.shadeColor(color.value, -25),
      }
      newColors.push(newColor);      
    })
    console.log(newColors)
    this.setState({colors:newColors});
  }


    render() {
      return (
        <div className="Palette grid-container">
          <h3 className="grid-header">Palette</h3>
          {this.state.colors.map(color=><Color changeColor={this.changeColor} name={color.name} value={color.value} contrast={color.contrast} dark={color.dark} light={color.light}/>)}
        </div>
      );
    }
}

export default App;
