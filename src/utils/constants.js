const STACK = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];
const MAX_SHORT_MOVIE_DURATION = 52;

const ERROR = "Ошибка";
const ERROR_400 = 400;
const ERROR_401 = 401;
const ERROR_409 = 409;

const EMAIL_ALREADY_REGISTERED_MESSAGE =
  "Пользователь с таким email уже существует.";
const INCORRECT_ADD_USER_DATA = "Переданы некорректные данные при регистрации";
const REG_ERROR_MESSAGE = "При регистрации пользователя произошла ошибка.";
const AUTH_ERROR_MESSAGE = "При авторизации пользователя произошла ошибка.";
const INVALID_AUTH_DATA_ERROR_MESSAGE =
  "Вы ввели неправильный логин или пароль.";
const NO_RESULTS_MESSAGE = "Ничего не найдено";
const REQUEST_ERROR_MESSAGE =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";

const MOVIES_PER_PAGE_LARGE = 16;
const MOVIES_PER_PAGE_MIDDLE = 8;
const MOVIES_PER_PAGE_SMALL = 5;

const EMAIL_REGEX = "^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,4}$";
const NAME_REGEX = "[A-Za-zА-Яа-яЁё\\s\\-]+";

export {
  STACK,
  MAX_SHORT_MOVIE_DURATION,
  ERROR,
  ERROR_400,
  ERROR_401,
  ERROR_409,
  EMAIL_REGEX,
  NAME_REGEX,
  EMAIL_ALREADY_REGISTERED_MESSAGE,
  INCORRECT_ADD_USER_DATA,
  REG_ERROR_MESSAGE,
  AUTH_ERROR_MESSAGE,
  INVALID_AUTH_DATA_ERROR_MESSAGE,
  REQUEST_ERROR_MESSAGE,
  NO_RESULTS_MESSAGE,
  MOVIES_PER_PAGE_LARGE,
  MOVIES_PER_PAGE_MIDDLE,
  MOVIES_PER_PAGE_SMALL,
};
