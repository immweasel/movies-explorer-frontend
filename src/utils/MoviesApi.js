import { configApiBeatfilm } from '../utils/constants';

const checkError = (res) => {
  if (res.ok) {
    return res.json();
  }
  else {
    return Promise.reject(res.status);
  }
}

export const getFilms = () => {
  return fetch(
    configApiBeatfilm.BASE_URL,
    {
      methods: 'GET',
      headers: configApiBeatfilm.headers,
    },
  )
    .then((res) => {
      return checkError(res);
    })
}