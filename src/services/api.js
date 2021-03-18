import axios from 'axios';

export const key = 'f83a771b';

const api = axios.create({
	baseURL: 'https://api.hgbrasil.com',
});

export default api;
