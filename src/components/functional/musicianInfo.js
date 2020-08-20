import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/musicianInfo.css';
import Errors from '../presentational/errors';

const MusicianInfo = ({
  musician, setIsLoading, musicianState, errorState, updateMusician,
}) => {
  // Functions and State of main App component
  const { fetchErrors, setFetchErrors } = errorState;
  const { setMusicians } = musicianState;

  // Current Component State Values
  const [errors, setErrors] = useState(fetchErrors);

  const [beingEdited, startEditor] = useState(false);
  const [musicianName, setMusicianName] = useState(musician.name);
  const [musicianAge, setMusicianAge] = useState(musician.age);
  const [musicianActive, setMusicianActive] = useState(musician.active);

  useEffect(() => {
    setErrors(fetchErrors);
  }, [fetchErrors]);

  const handleEdit = () => {
    startEditor(!beingEdited);
    // Reset Values to saved values
    setMusicianName(musician.name);
    setMusicianAge(musician.age);
    setMusicianActive(musician.active);
  };
  const handleUpdate = () => {
    const newMusician = { name: musicianName, age: musicianAge, active: musicianActive };
    updateMusician(setIsLoading, setMusicians, setFetchErrors, musician.id, newMusician);
  };
  const musicianEditForm = (
    <article className="musicianInfo">
      <h4>{musicianName}</h4>
      <Errors errors={errors} />
      <div>
        <input
          placeholder="Name of Musician"
          name="artistName"
          type="text"
          value={musicianName}
          minLength="2"
          maxLength="60"
          onChange={e => setMusicianName(e.target.value)}
        />
        <input
          id="age"
          placeholder="Age of Musician"
          name="age"
          type="number"
          value={musicianAge}
          min="12"
          max="150"
          onChange={e => setMusicianAge(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleUpdate}>Update</button>
      <button type="button" onClick={handleEdit}>Cancel</button>
    </article>
  );
  return beingEdited ? musicianEditForm : (
    <article className="musicianInfo">
      <h4>{musician.name}</h4>
      <div>
        <div>{musician.id}</div>
        <div>{musician.name}</div>
        <div>{musician.age}</div>
        <div>{musician.active ? 'true' : 'false'}</div>
      </div>
      <button type="button" onClick={handleEdit}>Edit</button>
    </article>
  );
};

MusicianInfo.propTypes = {
  musician: PropTypes.instanceOf(Object).isRequired,
  setIsLoading: PropTypes.func.isRequired,
  musicianState: PropTypes.instanceOf(Object).isRequired,
  errorState: PropTypes.instanceOf(Object).isRequired,
  updateMusician: PropTypes.func.isRequired,
};

export default MusicianInfo;
