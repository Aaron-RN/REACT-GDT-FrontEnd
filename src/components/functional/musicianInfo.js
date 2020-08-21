import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/musicianInfo.css';
import MusicianEditForm from '../presentational/musicianEditForm';

const MusicianInfo = ({
  musician, setIsLoading, musicianState, updateMusician,
}) => {
  // Functions and State of main App component
  // const { fetchErrors, setFetchErrors } = errorState;
  const { setMusicians } = musicianState;

  // Current Component State Values
  const isMounted = useRef(false);
  const [errors, setErrors] = useState('');

  const formErrors = errors !== '';
  const [beingEdited, startEditor] = useState(formErrors);
  const [musicianName, setMusicianName] = useState(musician.name);
  const [musicianAge, setMusicianAge] = useState(musician.age);
  const [musicianActive, setMusicianActive] = useState(musician.active);

  useEffect(() => {
    const mountComponent = () => { isMounted.current = true; };
    mountComponent();
    // cleanUp function - ComponentWillUnmount
    return () => { isMounted.current = false; };
  });

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
    updateMusician(setIsLoading, setMusicians, setErrors, musician.id, newMusician, isMounted);
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
