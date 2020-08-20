import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/musicianInfo.css';

const MusicianInfo = ({ musician }) => {
  return (
    <article className="musicianInfo">
      <h4>{musician.name}</h4>
      <div>
        <div>{musician.id}</div>
        <div>{musician.name}</div>
        <div>{musician.age}</div>
        <div>{musician.active ? 'true' : 'false'}</div>
      </div>
    </article>
  );
};

MusicianInfo.propTypes = {
  musician: PropTypes.instanceOf(Object).isRequired,
};

export default MusicianInfo;
