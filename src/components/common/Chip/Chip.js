import React from 'react';
import PropTypes from "prop-types";
import './Chip.scss';

function Chip(props) {
    return (
        <div className="chip" onClick={()=>props.onClick(props.text)}>
            {props.text}
        </div>
    );
}

Chip.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default Chip;
