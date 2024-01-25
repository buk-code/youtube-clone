import axios from "axios";

const axiosInstance = axios.create()

axiosInstance.defaults.headers.common['Accept'] = 'application/json';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.common['X-RapidAPI-Key'] = process.env.REACT_APP_RAPID_API_KEY;
axiosInstance.defaults.headers.common['X-RapidAPI-Host'] = 'youtube-v31.p.rapidapi.com';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   params: {
//     maxResults: '50'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

export class HttpClient {
  static async get(url) {
    return axiosInstance.get(`${BASE_URL}/${url}`).then(response => response.data)
  }
  static async post(url, body) {
    return axiosInstance.post(`${BASE_URL}/${url}`, body).then(response => response.data)
  }
}


export const fetchFromAPI = (url) => {
  return HttpClient.get(url)
}


