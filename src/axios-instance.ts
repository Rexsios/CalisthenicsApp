import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sportplan-addc3.firebaseio.com/'
})

export default instance;