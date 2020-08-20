import React, { useEffect, useState } from 'react';
import { fetchMusicians, addMusician } from './components/misc/apiRequests';
import Musicians from './components/functional/Musicians';
import MusicianInfo from './components/presentational/musicianInfo';
// import logo from './logo.svg';
import './assets/css/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [musicians, setMusicians] = useState([]);
  const [fetchErrors, setFetchErrors] = useState('');

  useEffect(() => {
    fetchMusicians(setIsLoading, setMusicians, setFetchErrors);
  }, []);

  const renderLoader = (
    <div className="container">
      <h1 className="loader">Loading...</h1>
    </div>
  );

  return isLoading ? renderLoader : (
    <div className="container">

      <main>
        <Musicians
          setIsLoading={setIsLoading}
          musicianState={{ setMusicians }}
          addMusician={addMusician}
          errorState={{ fetchErrors, setFetchErrors }}
        />
        <section className="musicians">
          {musicians.map(artist => (
            <MusicianInfo key={artist.id + artist.name} musician={artist} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
