import axios from 'axios';

const api = axios.create({
  baseURL: 'https://756c0c70c584.ngrok.io/',
});

export default api;
