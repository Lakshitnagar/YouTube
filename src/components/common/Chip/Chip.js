import React from 'react';
import PropTypes from "prop-types";
import './Chip.scss';

function Chip(props) {
    return (
        <div className="chip">
            {props.text}
        </div>
    );
}

Chip.propTypes = {
    text: PropTypes.string
};

export default Chip;
