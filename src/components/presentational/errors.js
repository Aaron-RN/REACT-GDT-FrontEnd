import React from 'react';
import PropTypes from 'prop-types';

const Errors = ({ errors }) => (
  <div className="errors">
    {typeof errors === 'string' && errors}
    {typeof errors === 'object'
      && errors.map(error => <div key={error}>{error}</div>)}
  </div>
);

Errors.propTypes = {
  errors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Array),
  ]).isRequired,
};

export default Errors;
