import axios from 'axios';

// API http://api.themoviedb.org/3/movie/550?api_key=52c43ee20b41d87e742e5ccb664b1ef9


const api = axios.create({
    baseURL: 'http://api.themoviedb.org/3/'
});

export default api;