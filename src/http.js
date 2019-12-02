import axios from 'axios'
const qs = require('qs')
const BASE_URL = ""
var instance = axios.create({
	baseURL: BASE_URL,
	responseType: 'json',
	transformRequest: (data, headers) => {
		if (isFormData(data)) return data;
		// brackets: a: [1, 2] ===> a[]=1&a[]=2
		return qs.stringify(data, { arrayFormat: 'brackets' });
	}
})

instance.interceptors.request.use((config) => {
	return config;
}, (error) => {
	return Promise.reject(error);
})

instance.interceptors.response.use((response) => {
	return response;
}, (error) => {
	return Promise.reject(error);
})

function isFormData(data) {
	return Object.prototype.toString.call(data) === '[object FormData]';
}

export {
	instance
}