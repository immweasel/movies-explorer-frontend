export const configApiBeatFilm = {
  baseFilmsApiUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: { "Content-Type": "application/json" },
};

export const emailRegex = '/^((([0-9A-Za-z]{1}[-0-9A-z]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u';
export const nameRegex = '[A-Za-zА-Яа-яЁё\\s\\-]+';

export const endpoints = {
  endpointRegister: '/signup',
  endpointAuth: '/signin',
  endpointMovies: '/movies',
  endpointProfile: '/profile',
  endpointSavedMovies: '/saved-movies'
}

export const codeError = {
  dataDublicate: 409,
  authError: 401,
  dataError: 400,
}

export const configMainApi = {
  baseApiUrl: 'http://localhost:3000',
  // baseApiUrl: 'https://api.immweasel.diploma.nomoredomainsrocks.ru',
  headers: {
    accept: 'application/json',
    'Content-type': 'application/json',
  },
  credentials: 'include',
  endpoint: {
    endpointRegister: '/signup',
    endpointAuth: '/signin',
    endpointOut: '/signout',
    endpointCheckJwl: '/users/me',
    endpointMovies: '/movies',
  }
};

export const message = {
    searchPlaceholderInput: 'Фильм', 
    emptyPlaceholderInput: 'Нужно ввести ключевое слово', 
    userExist: 'Пользователь с таким email уже существует', 
    registerUserError: 'При регистрации пользователя произошла ошибка', 
    loginPasswordIncorrect: 'Вы ввели неправильный логин или пароль', 
    authorizationError: 'При авторизации произошла ошибка', 
    userDateModified: 'Данные профиля успешно изменены', 
  };

export const configUrl = {
  imageUrl: 'https://api.nomoreparties.co'
};
