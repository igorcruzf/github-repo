import {http} from './http'

const fetchRepos = user => http.get(`users/${user}/repos`);

export default fetchRepos;