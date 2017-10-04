import React, { Component } from 'react';
import FaBeer from 'react-icons/lib/fa/beer';
import './Color.css';

class Color extends Component {

  ColorPicker(event, sound){
    this.props.changeColor(event, sound);
  }

  render() {
    return (
      <div className="Color grid-body grid-container">
          <h3 className="name">{this.props.name}</h3>
          <div onClick={event=>{this.ColorPicker(event, "umm...")}} className="value" style={{backgroundColor:this.props.value}}>
            <FaBeer color={this.props.contrast ? this.props.contrast : "#FFFFFF"}/>

          </div>
          <div className="contrast" style={{backgroundColor:this.props.contrast}} />
          <div className="dark" style={{backgroundColor:this.props.dark}} />
          <div className="light" style={{backgroundColor:this.props.light}} />
      </div>
    );
  }
}

export default Color;
