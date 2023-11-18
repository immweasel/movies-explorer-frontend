import { configMainApi, configUrl } from './constants';

const {
  baseApiUrl,
  headers,
  credentials,
  endpoint } = configMainApi;

const {
  endpointRegister,
  endpointAuth,
  endpointCheckJwl,
  endpointOut,
  endpointMovies } = endpoint;

const checkError = (res) => {
  if (res.ok) {
    return res.json();
  }
  else {
    return Promise.reject(res.status);
  }
};

export const register = ({ email, password, name }) => {
  return fetch(
    `${baseApiUrl}${endpointRegister}`,
    {
      method: 'POST',
      headers,
      credentials,
      body: JSON.stringify({ email, password, name })
    })
    .then((res) => {
      return checkError(res);
    })
};

export const authorize = ({ email, password }) => {
  return fetch(
    `${baseApiUrl}${endpointAuth}`,
    {
      method: 'POST',
      headers,
      credentials,
      body: JSON.stringify({ email, password })
    })
    .then((res) => {
      return checkError(res);
    })
};

export const logout = () => {
  return fetch(
    `${baseApiUrl}${endpointOut}`,
    {
      method: 'GET',
      headers,
      credentials
    }
  )
    .then((res) => {
      return checkError(res);
    })
};

export const getUser = () => {
  return fetch(
    `${baseApiUrl}${endpointCheckJwl}`,
    {
      method: 'GET',
      headers,
      credentials
    }
  )
    .then((res) => {
      return checkError(res);
    })
};

export const updateUserInfo = ({ name, email }) => {
  return fetch(
    `${baseApiUrl}${endpointCheckJwl}`,
    {
      method: 'PATCH',
      headers,
      credentials,
      body: JSON.stringify({ name, email })
    }
  )
    .then((res) => {
      return checkError(res);
    })
};

export const savedMovies = (movie) => {
  return fetch(
    `${baseApiUrl}${endpointMovies}`,
    {
      method: 'POST',
      headers,
      credentials,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${configUrl.imageUrl}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `${configUrl.imageUrl}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      })
    }
  )
    .then((res) => {
      return checkError(res);
    })
};

// сохраненные 
export const getMovies = () => {
  return fetch(
    `${baseApiUrl}${endpointMovies}`,
    {
      method: 'GET',
      headers,
      credentials
    }
  )
    .then((res) => {
      return checkError(res);
    })
};

export const deleteMovie = (movieId) => {
  return fetch(
    `${baseApiUrl}${endpointMovies}/${movieId}`,
    {
      method: 'DELETE',
      headers,
      credentials
    }
  )
    .then((res) => {
      return checkError(res);
    })
};