import { configApiBeatFilm } from '../utils/constants';

const checkError = (res) => {
  if (res.ok) {
    return res.json();
  }
  else {
    return Promise.reject(res.status);
  }
}

// просто фильмы
export const getFilms = () => {
  return fetch(
    configApiBeatFilm.BASE_URL,
    {
      methods: 'GET',
      headers: configApiBeatFilm.headers,
    },
  )
    .then((res) => {
      return checkError(res);
    })
}