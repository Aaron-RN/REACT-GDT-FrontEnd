import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/musicians.css';
import Errors from '../presentational/errors';

const Musicians = ({
  setIsLoading, musicianState, addMusician, errorState,
}) => {
  // Functions and State of main App component
  const { fetchErrors, setFetchErrors } = errorState;
  const { setMusicians } = musicianState;

  // Current Component State Values
  const [errors, setErrors] = useState(fetchErrors);

  const [musicianName, setMusicianName] = useState('');
  const [musicianAge, setMusicianAge] = useState(12);
  const [musicianActive, setMusicianActive] = useState(true);

  useEffect(() => {
    setErrors(fetchErrors);
  }, [fetchErrors]);

  const handleSubmit = e => {
    e.preventDefault();
    const newMusician = { name: musicianName, age: musicianAge, active: musicianActive };
    addMusician(setIsLoading, setMusicians, setFetchErrors, newMusician);
  };

  return (
    <section className="addMusician">
      <h3>Add a new Musician</h3>
      <Errors errors={errors} />
      <form onSubmit={handleSubmit} className="form">
        <div>
          <h4>Musician&apos;s Name</h4>
          <input
            id="name"
            placeholder="Name of Musician"
            name="name"
            type="text"
            value={musicianName}
            minLength="3"
            maxLength="60"
            onChange={e => setMusicianName(e.target.value)}
            required
          />
          <h4>Musician&apos;s Age</h4>
          <input
            id="age"
            placeholder="Age of Musician"
            name="age"
            type="number"
            value={musicianAge}
            min="12"
            max="150"
            onChange={e => setMusicianAge(e.target.value)}
            required
          />
          <fieldset>
            <legend><h4>Is this Musician still active?</h4></legend>
            <label htmlFor="isActive">
              <input
                id="isActive"
                type="radio"
                name="isActive"
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
                onChange={e => setMusicianActive(e.target.value)}
              />
              False
            </label>
          </fieldset>
        </div>
        <button type="submit">Add Musician</button>
      </form>
    </section>
  );
};

Musicians.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
  musicianState: PropTypes.instanceOf(Object).isRequired,
  errorState: PropTypes.instanceOf(Object).isRequired,
  addMusician: PropTypes.func.isRequired,
};

export default Musicians;
