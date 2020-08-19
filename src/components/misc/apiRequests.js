import axios from 'axios';

require('dotenv').config();

const API_URL = process.env.REACT_APP_API_URL;

// Populate Musicians List
const fetchMusicians = func => {
  func(true);
  axios.get(`${API_URL}musicians`)
    .then(response => {
      func(false);
      return { message: response.statusText, data: response.data };
    })
    .catch(error => {
      func(false);
      const errorMsg = error.response.data.error || [`${error.response.statusText}`];
      return { message: errorMsg };
    });
};

const addMusician = musician => {
  axios.post(`${API_URL}musicians`, { musician })
    .then(response => (
      { message: response.statusText, data: response.data }
    ))
    .catch(error => {
      const errorMsg = error.response.data.error || [`${error.response.statusText}`];
      return { message: errorMsg };
    });
};

const updateMusician = (musicianID, musician) => {
  axios.patch(`${API_URL}musicians/${musicianID}`, { musician })
    .then(response => (
      { message: response.statusText, data: response.data }
    ))
    .catch(error => {
      const errorMsg = error.response.data.error || [`${error.response.statusText}`];
      return { message: errorMsg };
    });
};

export { fetchMusicians, addMusician, updateMusician };
