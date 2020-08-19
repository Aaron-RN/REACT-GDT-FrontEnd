import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Populate Musicians List
const fetchMusicians = async func => {
  func(true);
  const result = await axios.get(`${API_URL}musicians`)
    .then(response => (
      { message: response.statusText, data: response.data.musicians }
    ))
    .catch(error => {
      const errorMsg = error.response.data.error || [`${error.response.statusText}`];
      return { message: errorMsg, data: errorMsg };
    });

  func(false);
  return result;
};

// Add a new Musician
const addMusician = async (func, musician) => {
  func(true);
  const result = axios.post(`${API_URL}musicians`, { musician })
    .then(response => (
      { message: response.statusText, data: response.data }
    ))
    .catch(error => {
      const errorMsg = error.response.data.error || [`${error.response.statusText}`];
      return { message: errorMsg, data: errorMsg };
    });

  func(false);
  return result;
};

// Update and existing Musician
const updateMusician = async (func, musicianID, musician) => {
  func(true);
  const result = axios.patch(`${API_URL}musicians/${musicianID}`, { musician })
    .then(response => (
      { message: response.statusText, data: response.data }
    ))
    .catch(error => {
      const errorMsg = error.response.data.error || [`${error.response.statusText}`];
      return { message: errorMsg };
    });

  func(false);
  return result;
};

export { fetchMusicians, addMusician, updateMusician };
