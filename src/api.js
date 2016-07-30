import axios from 'axios';

export function request(uri) {
	return axios.get(`https://jsonplaceholder.typicode.com${uri}`)
        .then(({ data }) => data);
}
