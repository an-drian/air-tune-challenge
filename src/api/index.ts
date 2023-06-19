import axios from 'axios';

const BASE_URL = 'https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000
});

export default axiosInstance;
