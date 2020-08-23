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

  const resetState = () => {
    setMusicianName('');
    setMusicianAge(12);
    setMusicianActive(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newMusician = { name: musicianName, age: musicianAge, active: musicianActive };
    addMusician(setIsLoading, setMusicians, setFetchErrors, newMusician);
    resetState();
  };

  return (
    <section className="addMusicianContainer text-center">
      <div className="inline-block addMusician">
        <h2>Add a new Musician</h2>
        <Errors errors={errors} />
        <form onSubmit={handleSubmit} className="form">
          <div>
            <h3>Musician&apos;s Name</h3>
            <input
              id="name"
              placeholder="Name of Musician"
              name="name"
              type="text"
              value={musicianName}
              minLength="3"
              maxLength="32"
              onChange={e => setMusicianName(e.target.value)}
              required
            />
            <h3>Musician&apos;s Age</h3>
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
              <legend><h3>Is this Musician still active?</h3></legend>
              <label htmlFor="isActive">
                <input
                  id="isActive"
                  type="radio"
                  name="isActive"
                  checked
                  onChange={e => setMusicianActive(e.currentTarget.value)}
                />
                True
              </label>
              <label htmlFor="notActive">
                <input
                  id="notActive"
                  type="radio"
                  name="isActive"
                  onChange={e => setMusicianActive(e.currentTarget.value)}
                />
                False
              </label>
            </fieldset>
          </div>
          <button type="submit">Add Musician</button>
        </form>
      </div>
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
