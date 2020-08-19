import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Musicians = ({ musicians }) => {
  const [allMusicians, setMusicians] = useState(musicians);

  useEffect(() => {
    setMusicians(musicians);
  }, [musicians]);

  return (
    <div>
      {allMusicians}
    </div>
  );
};

Musicians.defaultProps = {
  musicians: [],
};
Musicians.propTypes = {
  musicians: PropTypes.instanceOf(Array),
};

export default Musicians;
