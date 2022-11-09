
import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8000/',
});

//? дали глобальную ссылку для axios

export default instance;
