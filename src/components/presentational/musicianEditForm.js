import React from 'react';
import PropTypes from 'prop-types';
import Errors from './errors';

const MusicianEditForm = ({
  musicianName, musicianAge, setMusicianName, setMusicianAge, setMusicianActive,
  errors, handleEdit, handleUpdate,
}) => (
  <article className="musicianInfo">
    <h4>{musicianName}</h4>
    <Errors errors={errors} />
    <form onSubmit={handleUpdate}>
      <input
        placeholder="Name of Musician"
        name="artistName"
        type="text"
        value={musicianName}
        minLength="3"
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
      <div>
        <h5>Musician still Active?</h5>
        <label htmlFor="isActive">
          <input
            id="isActive"
            type="radio"
            name="artistActive"
            onChange={e => setMusicianActive(e.target.value)}
          />
          True
        </label>
        <label htmlFor="notActive">
          <input
            id="notActive"
            type="radio"
            name="artistActive"
            onChange={e => setMusicianActive(e.target.value)}
          />
          False
        </label>
      </div>
      <button type="submit">Update</button>
    </form>
    <button type="button" onClick={handleEdit}>Cancel</button>
  </article>
);

MusicianEditForm.propTypes = {
  musicianName: PropTypes.string.isRequired,
  musicianAge: PropTypes.number.isRequired,
  setMusicianName: PropTypes.func.isRequired,
  setMusicianAge: PropTypes.func.isRequired,
  setMusicianActive: PropTypes.func.isRequired,
  errors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Array),
  ]).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default MusicianEditForm;
