import React from 'react';
import PropTypes from 'prop-types';

const Errors = ({ errors }) => (
  <div className="errors">{errors}</div>
);

Errors.propTypes = {
  errors: PropTypes.string.isRequired,
};

export default Errors;
