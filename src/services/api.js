import axios from "axios";

//BASE URL: https://api.themoviedb.org/3/
//URL: /movie/now_playing?api_key=b08cd9bdb025e6a250bec6d050f0d87a&language=pt-BR

const api = axios.create(
    {
        baseURL: 'https://api.themoviedb.org/3/',
    }
);

export default api;