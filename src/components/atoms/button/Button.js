import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ as: T, ...props }) => {
  return <T { ...props } />;
};


Button.propTypes = {
  as: PropTypes.oneOfType([ PropTypes.string ]),
  style: PropTypes.object
};

Button.defaultProps = {
  as: 'button'
};

export default Button;
