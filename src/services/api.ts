import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apionepiece.herokuapp.com/api',
});

export default api;
