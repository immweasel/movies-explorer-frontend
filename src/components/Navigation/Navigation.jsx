import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Navigation = () => {
  const Authorized = React.useContext(CurrentUserContext);
  console.log(Authorized);

  return (
    // <nav className='navigation'>
    <nav
      className={`navigation ${Authorized === true
        ? 'navigation_invisible'
        : ''}`}>
      {Authorized === true
        ? (
          <ul className='navigation__container'>
            <ul className='navigation__wrapper'>
              <li className='navigation__item'>
                <NavLink
                  to='/movies'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'navigation__link navigation__link_films links-hover'
                      :
                      isActive
                        ? 'navigation__link navigation__link_films navigation__link_active'
                        : 'navigation__link navigation__link_films links-hover'}
                >
                  Фильмы
                </NavLink>
              </li>
              <li className='navigation__item'>
                <NavLink
                  to='/saved-movies'
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'navigation__link navigation__link_films links-hover'
                      :
                      isActive
                        ? 'navigation__link navigation__link_films navigation__link_active'
                        : 'navigation__link navigation__link_films links-hover'}
                >
                  Сохранённые фильмы
                </NavLink></li>
            </ul>
            <li className='navigation__item'>
              <AccountButton></AccountButton>
            </li>

          </ul>
        )
        : (
          <ul className='navigation__container navigation__container_auth'>
            <li className='navigation__item'>
              <Link
                to='/signup'
                className='navigation__link navigation__link_registration links-hover'>
                Регистрация
              </Link>
            </li>
            <li className='navigation__item'>
              <Link
                to='/signin'
                className='navigation__button-login links-hover'>
                Войти
              </Link>
            </li>
          </ul>
        )}
    </nav>
  );
}

export default Navigation;