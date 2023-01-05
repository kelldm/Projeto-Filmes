import axios from 'axios';

// API https://api.themoviedb.org/3/movie/550?api_key=52c43ee20b41d87e742e5ccb664b1ef9


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;