import React, { Component } from 'react';
import FaEdit from 'react-icons/lib/fa/pencil';
import FaAnchor from 'react-icons/lib/fa/anchor';
import './Color.css';

class Color extends Component {

  ColorPicker(event, sound){
    this.props.changeColor(event, sound);
  }

  render() {
    return (
      <div>
        <div className="Color grid-body grid-container">
            <h3 className="name">{this.props.name}</h3>
            <div onClick={event=>{this.ColorPicker(this.props.name, "value")}} className="value" style={{backgroundColor:this.props.value}}>
              <FaEdit onClick={this.props.editColor} color={this.props.contrast ? this.props.contrast : "#FFFFFF"}/>
              <FaAnchor color={this.props.contrast ? this.props.contrast : "#FFFFFF"} />
            </div>
            <div className="contrast" style={{backgroundColor:this.props.contrast}} />
            <div className="dark" style={{backgroundColor:this.props.dark}} />
            <div className="light" style={{backgroundColor:this.props.light}} />
        </div>
      </div>
    );
  }
}

export default Color;
