import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EditColor.css';

class EditColor extends Component {
    render() {
        return (
            <div className="edit-color edit-color__outer">
                <div className="edit-color__inner">
                    <h1>Editing...</h1>
                    <h2>{this.props.editValues.colorName}</h2>
                    <h2>{this.props.editValues.colorVariant}</h2>
                    <h2>{this.props.editValues.currentValue}</h2>
                    <input type="color" value="this.props.editValues.currentValue" onChange={event => {this.props.handleColorChange(this.props.editValues.colorName,this.props.editValues.colorVariant,event.target.value)}}/>
                </div>
            </div>
        );
    }
}

EditColor.propTypes = {

};

export default EditColor;