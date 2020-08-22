import React, { useEffect, useState } from 'react';
import { fetchMusicians, addMusician, updateMusician } from './components/misc/apiRequests';
import Musicians from './components/functional/Musicians';
import MusicianInfo from './components/functional/musicianInfo';
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
    <div className="loaderContainer"><h1 className="loader">Loading...</h1></div>
  );

  return (
    <div>
      {isLoading && renderLoader}
      <header className="navBG">
        <nav className="container"><h2>GDT Unit - Assessment</h2></nav>
      </header>
      <main className="container">
        <Musicians
          setIsLoading={setIsLoading}
          musicianState={{ setMusicians }}
          addMusician={addMusician}
          errorState={{ fetchErrors, setFetchErrors }}
        />
        <section className="allMusicians">
          <h2>All Local Artists</h2>
          <div className="musicians">
            {musicians.map(artist => (
              <MusicianInfo
                key={artist.id + artist.name}
                musician={artist}
                setIsLoading={setIsLoading}
                musicianState={{ setMusicians }}
                errorState={{ fetchErrors, setFetchErrors }}
                updateMusician={updateMusician}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
