import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';

const Navigation = () => {
  return (
    <div >
      <p><p>Navigation</p> — компонент, который отвечает за меню навигации на сайте.</p>
      <div className='navigation__navbar'>
        <Link to='/' className='navigation__link'>лого</Link>
        <Link to='/movies' className='navigation__link'>фильмф</Link>
        <Link to='/saved-movies' className='navigation__link'>сохраненные фильмы</Link>
        <Link to='/signin' className='navigation__link'>войти</Link>
        <Link to='/signup' className='navigation__link'>регистрация</Link>
      </div>
    </div>
  );
}

export default Navigation;