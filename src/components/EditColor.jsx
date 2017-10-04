import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EditColor.css';

class EditColor extends Component {
    render() {
        return (
            <div class="edit-color edit-color__outer">
                <div class="edit-color__inner">
                    <h1>Editing...</h1>
                </div>
            </div>
        );
    }
}

EditColor.propTypes = {

};

export default EditColor;