import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MusicianInfo from '../presentational/musicianInfo';
import '../../assets/css/musicians.css';

const Musicians = ({
  setIsLoading, musicianState, addMusician, errorState,
}) => {
  // Functions and State of main App component
  const { fetchErrors, setFetchErrors } = errorState;
  const { musicians, setMusicians } = musicianState;

  // Current Component State Values
  const [errors, setErrors] = useState(fetchErrors);
  const [allMusicians, setAllMusicians] = useState(musicians);

  const [musicianName, setMusicianName] = useState('');
  const [musicianAge, setMusicianAge] = useState(0);
  const [musicianActive, setMusicianActive] = useState(true);

  useEffect(() => {
    setAllMusicians(musicians);
  }, [musicians]);

  useEffect(() => {
    setErrors(fetchErrors);
  }, [fetchErrors]);

  const handleSubmit = () => {
    const newMusician = { name: musicianName, age: musicianAge, active: musicianActive };
    addMusician(setIsLoading, setMusicians, setFetchErrors, newMusician);
  };

  return (
    <div>
      <h3>Add a new Musician</h3>
      <div className="errors">{errors}</div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <div>Musician&apos;s Name</div>
          <input
            id="name"
            placeholder="Name of Musician"
            name="name"
            type="text"
            value={musicianName}
            minLength="2"
            maxLength="60"
            onChange={e => setMusicianName(e.target.value)}
          />
          <div>Musician&apos;s Age</div>
          <input
            id="age"
            placeholder="Age of Musician"
            name="age"
            type="number"
            value={musicianAge}
            min="0"
            max="150"
            onChange={e => setMusicianAge(e.target.value)}
          />
          <fieldset>
            <legend>Is this Musician still active?</legend>
            <label htmlFor="isActive">
              <input
                id="isActive"
                type="radio"
                name="isActive"
                value="true"
                checked
                onChange={e => setMusicianActive(e.target.value)}
              />
              True
            </label>
            <label htmlFor="notActive">
              <input
                id="notActive"
                type="radio"
                name="isActive"
                value="false"
                onChange={e => setMusicianActive(e.target.value)}
              />
              False
            </label>
          </fieldset>
        </div>
        <button type="submit">Add Musician</button>
      </form>
      {allMusicians.map(musician => (
        <MusicianInfo key={musician.id + musician.name} musician={musician} />
      ))}
    </div>
  );
};

Musicians.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
  musicianState: PropTypes.instanceOf(Object).isRequired,
  errorState: PropTypes.instanceOf(Object).isRequired,
  addMusician: PropTypes.func.isRequired,
};

export default Musicians;
