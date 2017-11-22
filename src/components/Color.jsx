import React, { Component } from 'react';

import FaEdit from 'react-icons/lib/fa/pencil';
import FaAnchor from 'react-icons/lib/fa/anchor';
import FaLocked from 'react-icons/lib/fa/lock';
import FaUnlocked from 'react-icons/lib/fa/unlock';

import './Color.css';

class Color extends Component {

  ColorPicker(event, colorName){
    this.props.changeColor(event.target.value, colorName);
  }

  render() {
    return (
        <div className="Color grid-body grid-container">
            <h3 className="color__name">{this.props.name}</h3>
            <div className="color__value" style={{backgroundColor:this.props.value}}>
              <input className="color__colorpicker" id={"colorPicker-"+this.props.name} type="color" value={this.props.value} onChange={event => {this.props.handleColorChange(this.props.name, "value", event.target.value)}} disabled={this.props.locked}/>
              <label htmlFor={"colorPicker-"+this.props.name}><FaEdit color={this.props.contrast ? this.props.contrast : "#FFFFFF"}/></label>
              <FaAnchor color={this.props.contrast ? this.props.contrast : "#FFFFFF"} />
              {this.props.locked ? <FaLocked color={this.props.contrast ? this.props.contrast : "#FFFFFF"} onClick={() => this.props.handleLock(this.props.name)} /> : <FaUnlocked color={this.props.contrast ? this.props.contrast : "#FFFFFF"} onClick={() => this.props.handleLock(this.props.name)} />}
            </div>
            <div className="color__contrast" style={{backgroundColor:this.props.contrast}} />
            <div className="color__dark" style={{backgroundColor:this.props.dark}} />
            <div className="color__light" style={{backgroundColor:this.props.light}} />
        </div>
    );
  }
}

export default Color;
