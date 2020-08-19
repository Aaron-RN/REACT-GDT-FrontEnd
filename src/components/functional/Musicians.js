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

Musicians.propTypes = {
  musicians: PropTypes.instanceOf(Array).isRequired,
};

export default Musicians;
