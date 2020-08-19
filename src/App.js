import React, { useEffect, useState } from 'react';
import { fetchMusicians } from './components/misc/apiRequests';
import Musicians from './components/functional/Musicians';
// import logo from './logo.svg';
import './assets/css/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [musicians, setMusicians] = useState([]);

  useEffect(() => {
    const result = fetchMusicians(setIsLoading);
    setMusicians(result);
    console.log(result);
  }, []);

  const renderLoader = (
    <div>
      Loading...
    </div>
  );

  return isLoading ? renderLoader : (
    <div>
      <Musicians musicians={musicians} />
    </div>
  );
}

export default App;
