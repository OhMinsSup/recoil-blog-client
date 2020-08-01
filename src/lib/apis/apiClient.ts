import axios from 'axios';

// const host =
//   process.env.NODE_ENV === 'development'
//     ? 'http://localhost:4000/api'
//     : process.env.REACT_APP_API_HOST || 'http://localhost:4000/api';

const apiClient = axios.create();

export default apiClient;
