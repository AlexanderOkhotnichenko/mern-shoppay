import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mern-shoppay.onrender.com',
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
