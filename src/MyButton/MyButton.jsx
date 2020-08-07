import React from 'react';
import PropTypes from 'prop-types';

const MyButton = ({ label, onClick }) =>
    <button onClick={onClick}>
        {label}
    </button>

MyButton.defaultProps = {
    onClick: undefined,
}

MyButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default MyButton;
