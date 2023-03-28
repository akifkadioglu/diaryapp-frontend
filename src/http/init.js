import axios from 'axios';
import { storage } from '../storage';


var token = storage.pull(storage.TOKEN)

if (token != null) {
    try {
        axios.defaults.headers.common['Authorization'] = token;
    } catch (error) {
        localStorage.clear()
    }
}
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;