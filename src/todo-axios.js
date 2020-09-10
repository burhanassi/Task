import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://todos-e78d4.firebaseio.com/'
});

export default instance;