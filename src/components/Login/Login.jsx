import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import './Login.css';

const Login = ({ onAuth }) => {
  const Authorized = React.useContext(CurrentUserContext);
  // console.log(Authorized);
  const { pathname } = useLocation();

  const [formValue, setFormValue] = useState({
    authEmail: '',
    authPwd: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  }
  console.log(formValue);

  const handleClick = (e) => {
    console.log(e);
    e.preventDefault();
    onAuth();
  }

  return (
    <main className='login auth'>
      <AuthForm
        title={'Рады видеть!'}
        buttonText={'Войти'}
        authMessage={'Ещё не зарегистрированы? '}
        authLinkMessage={'Регистрация'}
        endpoint={'/signup'}
        onClickLogin={handleClick}
      >
        <AuthInput
          inputValue={formValue.authEmail}
          inputType={'email'}
          placeholderInput={'Введите email'}
          labelName={'E-mail'}
          inptValue={'pochta@yandex.ru|'}
          idInput={'email'}
          nameInput={'authEmail'}
          erorrMessage={'Что - то пошло не так'}
          onChange={handleChange}
        />

        <AuthInput
          inputValue={formValue.authPwd}
          inputType={'password'}
          labelName={'Пароль'}
          placeholderInput={'Введите пароль'}
          // inptValue={'••••••••••••••'}
          idInput={'pwd'}
          nameInput={'authPwd'}
          erorrMessage={'Пожалуйста, используйте не менее 4 символов (сейчас вы используете 3 символа).'}
          onChange={handleChange}
        />

        {/* <button
          type='button'
          onClick={handleClick}
          to='/'
          className='auth__btn'>Войти</button> */}
      </AuthForm >

      {/* <div className='login__wrapper'>
        <p className="login__paragraph">Ещё не зарегистрированы? <Link
          to='/signup'
          className='login__link links-hover'
        >
          Регистрация
        </Link>
        </p>
      </div> */}

    </main >
  );
}

export default Login;