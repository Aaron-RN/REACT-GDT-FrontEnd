import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Musicians = ({
  setIsLoading, musicians, addMusician, fetchErrors,
}) => {
  const [allMusicians, setMusicians] = useState(musicians);
  const [musicianName, setMusicianName] = useState('');
  const [musicianAge, setMusicianAge] = useState(0);
  const [musicianActive, setMusicianActive] = useState(true);

  useEffect(() => {
    setMusicians(musicians);
  }, [musicians]);

  const handleSubmit = () => {
    const newMusician = { name: musicianName, age: musicianAge, active: musicianActive };
    const result = addMusician(setIsLoading, newMusician);
    console.log(result);
  };

  return (
    <div>
      <div>{fetchErrors}</div>
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
        <MusicianInfo key={musician.id + musician.name} />
      ))}
    </div>
  );
};

Musicians.defaultProps = {
  musicians: [],
};
Musicians.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
  musicians: PropTypes.instanceOf(Array),
  addMusician: PropTypes.func.isRequired,
  fetchErrors: PropTypes.string.isRequired,
};

export default Musicians;
