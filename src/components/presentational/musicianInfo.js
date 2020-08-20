import React from 'react';
import PropTypes from 'prop-types';

const MusicianInfo = ({ musician }) => {
  return (
    <div>
      {musician.id}
      {musician.name}
      {musician.age}
      {musician.active ? 'true' : 'false'}
    </div>
  );
};

MusicianInfo.propTypes = {
  musician: PropTypes.instanceOf(Object).isRequired,
};

export default MusicianInfo;
