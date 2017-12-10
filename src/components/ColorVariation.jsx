import React, { Component } from 'react';
import { getContrast } from "../utils/contrastRatio.js";
import {CHANGE_COLOR} from "../actions/actions";
import FaEdit from 'react-icons/lib/fa/pencil';

class ColorVariation extends Component {

  render() {
      let colorValue = this.props.color[this.props.variation];
      let id=`colorPicker-${this.props.color.name}-${this.props.variation}`;

      return (
        <div style={{backgroundColor:colorValue}} className={`color color--${this.props.variation}`}>
            <input 
                className="color__colorpicker" 
                id={id} 
                type="color" 
                value={colorValue} 
                onChange={event => {this.props.handleColorChange(
                    this.props.index,
                    this.props.variation,
                    event.target.value)}}
                disabled={(this.props.color.locked && this.props.color.locked.indexOf(this.props.index) > -1)} />
            <label htmlFor={id}>
                <FaEdit color={this.props.index === "contrast" ? this.props.color.main : this.props.color.contrast}/>
            </label>

            {this.props.variation === "contrast" && getContrast(this.props.color.main, this.props.color.contrast) < 4.5 ? 
                <p className="color__warning color__warning--contrast">{(getContrast(this.props.color.main, this.props.color.contrast) < 3.5 ? "Alert! Contrast too low: " : "Warning - low contrast: " )}{getContrast(this.props.color.main, this.props.color.contrast)}</p>
                : ""}

        </div>
    );
  }
}

export default ColorVariation;
