import React, { Component } from 'react';

import FaEdit from 'react-icons/lib/fa/pencil';
import FaAnchor from 'react-icons/lib/fa/anchor';
import FaLocked from 'react-icons/lib/fa/lock';
import FaUnlocked from 'react-icons/lib/fa/unlock';

class ColorVariation extends Component {

  ColorPicker(event, colorName){
    this.props.changeColor(event.target.value, colorName);
  }
  
  render() {
      let colorValue = this.props.color[this.props.index];
      let id=`colorPicker-${this.props.color.name}-${this.props.index}`;

      return (
        <div style={{backgroundColor:colorValue}} className={`color color--${this.props.index}`}>
              <input className="color__colorpicker" id={id} type="color" value={colorValue} onChange={event => {this.props.handleColorChange(this.props.color.name, this.props.index, event.target.value)}} disabled={(this.props.color.locked && this.props.color.locked.indexOf(this.props.index) > -1)} />
              <label htmlFor={id}>
                <FaEdit color={this.props.index === "contrast" ? this.props.color.main : this.props.color.contrast}/>
              </label>
              <FaAnchor color={this.props.index === "contrast" ? this.props.color.main : this.props.color.contrast} />
              {(this.props.color.locked && this.props.color.locked.indexOf(this.props.index) > -1 
                ? <FaLocked color={this.props.index === "contrast" ? this.props.color.main : this.props.color.contrast} onClick={() => this.props.handleLock(this.props.color.name, this.props.index)} /> 
                : <FaUnlocked color={this.props.index === "contrast" ? this.props.color.main : this.props.color.contrast} onClick={() => this.props.handleLock(this.props.color.name, this.props.index)} />
              )}
        </div>
    );
  }
}

export default ColorVariation;
