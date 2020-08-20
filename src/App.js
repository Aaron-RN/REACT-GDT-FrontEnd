import React, { useEffect, useState } from 'react';
import { fetchMusicians, addMusician } from './components/misc/apiRequests';
import Musicians from './components/functional/Musicians';
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
    <div>
      Loading...
    </div>
  );

  return isLoading ? renderLoader : (
    <div>
      <Musicians
        setIsLoading={setIsLoading}
        musicianState={{ musicians, setMusicians }}
        addMusician={addMusician}
        errorState={{ fetchErrors, setFetchErrors }}
      />
    </div>
  );
}

export default App;
