import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/musicianInfo.css';
import MusicianEditForm from '../presentational/musicianEditForm';

const MusicianInfo = ({
  musician, setIsLoading, musicianState, updateMusician,
}) => {
  // Functions and State of main App component
  const { setMusicians } = musicianState;

  // Current Component State Values
  const [errors, setErrors] = useState('');

  const formErrors = errors !== '';
  const [beingEdited, startEditor] = useState(formErrors);
  const [musicianName, setMusicianName] = useState(musician.name);
  const [musicianAge, setMusicianAge] = useState(musician.age);
  const [musicianActive, setMusicianActive] = useState(musician.active);

  const handleEdit = () => {
    startEditor(!beingEdited);
    // Reset Values to saved values
    setMusicianName(musician.name);
    setMusicianAge(musician.age);
    setMusicianActive(musician.active);
  };
  const handleUpdate = e => {
    e.preventDefault();
    const newMusician = { name: musicianName, age: musicianAge, active: musicianActive };
    updateMusician(setIsLoading, setMusicians, setErrors, musician.id, newMusician);
    const anyErrors = errors !== '';
    startEditor(anyErrors);
  };

  return beingEdited
    ? (
      <MusicianEditForm
        musicianName={musicianName}
        musicianAge={musicianAge}
        setMusicianName={setMusicianName}
        setMusicianAge={setMusicianAge}
        setMusicianActive={setMusicianActive}
        errors={errors}
        handleEdit={handleEdit}
        handleUpdate={handleUpdate}
      />
    ) : (
      <article className="musicianInfo">
        <header className="header">
          <h4 className="header-name">{musician.name}</h4>
          <button type="button" onClick={handleEdit}>Edit</button>
        </header>
        <table>
          <thead>
            <tr>
              <th className="id"><h5>ID</h5></th>
              <th><h5>Age</h5></th>
              <th><h5>Active</h5></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="id">{musician.id}</td>
              <td>{musician.age}</td>
              <td>{musician.active ? 'true' : 'false'}</td>
            </tr>
          </tbody>
        </table>
      </article>
    );
};

MusicianInfo.propTypes = {
  musician: PropTypes.instanceOf(Object).isRequired,
  setIsLoading: PropTypes.func.isRequired,
  musicianState: PropTypes.instanceOf(Object).isRequired,
  updateMusician: PropTypes.func.isRequired,
};

export default MusicianInfo;
