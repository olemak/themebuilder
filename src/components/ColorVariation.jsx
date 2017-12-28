import React, { Component } from 'react';
import { getContrast } from "../utils/contrastRatio.js";
import FaEdit from 'react-icons/lib/fa/pencil';

class ColorVariation extends Component {

  render() {
       return (
        <div style={{backgroundColor:this.props.colorValue}} className={`color color--${this.props.variation}`}>
            <input 
                className="color__colorpicker" 
                id={`colorPicker-${this.props.colorName}-${this.props.variation}`} 
                type="color" 
                value={this.props.colorValue} 
                onChange={event => {
                    this.props.handleColorChange(
                        this.props.colorName,
                        this.props.variation,
                        event.target.value
                    )
                }}
            />
            <label htmlFor={`colorPicker-${this.props.colorName}-${this.props.variation}`}>
                <FaEdit color={(this.props.variation === "contrast") ? this.props.color.value : this.props.color.contrast}/>
            </label>

            { this.props.variation === "contrast" && getContrast(this.props.color.value, this.props.color.contrast) < 4.5 ? 
                <p className="color__warning color__warning--contrast">{(getContrast(this.props.color.value, this.props.color.contrast) < 3.5 ? "Alert! Contrast too low: " : "Warning - low contrast: " )}{getContrast(this.props.color.value, this.props.color.contrast)}</p>
            : "" }

        </div>
    );
  }
}

export default ColorVariation;
