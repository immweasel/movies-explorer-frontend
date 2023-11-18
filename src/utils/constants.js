export const configApiBeatFilm = {
  BASE_URL: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: { "Content-Type": "application/json" },
};

export const emailRegex = /^((([0-9A-Za-z]{1}[-0-9A-z]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
export const nameRegex = '[A-Za-zА-Яа-яЁё\\s\\-]+';

export const endpoints = {
  ENDPOINT_REGISTER: '/signup',
  ENDPOINT_AUTH: '/signin',
  ENDPOINT_MOVIES: '/movies',
  ENDPOINT_PROFILE: '/profile',
  ENDPOINT_SAVED_MOVIES: '/saved-movies'
}

export const codeError = {
  dataDublicate: 409,
  authError: 401,
  dataError: 400,
}

export const configMainApi = {
  BASE_URL: 'http://localhost:3000',
  // BASE_URL: 'https://api.immweasel.diploma.nomoredomainsrocks.ru',
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json',
  },
  credentials: 'include',
  endpoint: {
    ENDPOINT_REGISTER: '/signup',
    ENDPOINT_AUTH: '/signin',
    ENDPOINT_OUT: '/signout',
    ENDPOINT_CHECKJWL: '/users/me',
    ENDPOINT_MOVIES: '/movies',
  }
};

export const message = {
    SEARCH_PLACEHOLDER_INPUT: 'Фильм',
    EMPTY_PLACEHOLDER_INPUT: 'Нужно ввести ключевое слово',
    USER_EXIST: ' Пользователь с таким email уже существует.',
    REGISTER_USER_ERROR: 'При регистрации пользователя произошла ошибка.',
    LOGIN_PASSWORD_INCORRECT: 'Вы ввели неправильный логин или пароль.',
    AUTHORIZATION_ERROR: 'При авторизации произошла ошибка.',
    USER_DATE_MODIFIED: 'Данные профиля успешно изменены.',
  };

export const configUrl = {
  IMAGE_URL: 'https://api.nomoreparties.co'
};
