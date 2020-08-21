import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Populate Musicians List
const fetchMusicians = async (setLoading, setMusicians, setErrors) => {
  setLoading(true);
  await axios.get(`${API_URL}musicians`)
    .then(response => {
      const res = { message: response.statusText, data: response.data.musicians };
      setMusicians(res.data);
      setErrors('');
      setLoading(false);
    })
    .catch(error => {
      const errorMsg = error.response.data.error || [`${error.response.statusText}`];
      const res = { message: errorMsg, data: errorMsg };
      setErrors(res.data);
      setLoading(false);
    });
  setLoading(false);
};

// Add a new Musician
const addMusician = async (setLoading, setMusicians, setErrors, musician) => {
  setLoading(true);
  await axios.post(`${API_URL}musicians`, { musician })
    .then(response => {
      const res = { message: response.statusText, data: response.data.musicians };
      setMusicians(res.data);
      setErrors('');
      setLoading(false);
    })
    .catch(error => {
      const errorMsg = error.response.data.error || [`${error.response.statusText}`];
      const res = { message: errorMsg, data: errorMsg };
      setErrors(res.data);
      setLoading(false);
    });

  setLoading(false);
};

// Update and existing Musician
const updateMusician = async (
  setLoading, setMusicians, setErrors, musicianID, musician, componentMounted,
) => {
  setLoading(true);
  await axios.patch(`${API_URL}musicians/${musicianID}`, { musician })
    .then(response => {
      const res = { message: response.statusText, data: response.data.musicians };
      setMusicians(res.data);
      if (componentMounted.current) setErrors('');
      setLoading(false);
    })
    .catch(error => {
      const errorMsg = error.response.data.error || [`${error.response.statusText}`];
      const res = { message: errorMsg, data: errorMsg };
      if (componentMounted.current) setErrors(res.data);
      setLoading(false);
    });

  setLoading(false);
};

export { fetchMusicians, addMusician, updateMusician };
