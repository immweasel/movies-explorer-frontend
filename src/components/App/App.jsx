import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';

function App() {
  // const { pathname } = useLocation();
  const [isAuthorized, setAuthorized] = useState(false);

  const togleAuthorized = () => {
    if (isAuthorized === true) {
      return setAuthorized(false);
    }
    return setAuthorized(true);
  };

  const onlyLogin = () => {
    setAuthorized(true);
  }

  return (
    <div className='app'>
      <div className='page'>
        <CurrentUserContext.Provider
          value={isAuthorized}>
          <Header
            onAuth={togleAuthorized}
          ></Header>
          <Routes>
            <Route
              path='/'
              element={
                <Main></Main>
              } />

            <Route
              path='/movies'
              element={
                <Movies></Movies>
              } />

            <Route
              path='/saved-movies'
              element={
                <SavedMovies></SavedMovies>
              } />

            <Route
              path='/signup'
              element={
                <Register></Register>
              } />

            <Route
              path='/signin'
              element={
                <Login
                  onAuth={onlyLogin}
                ></Login>
              } />

            <Route
              path='/profile'
              element={
                <Profile
                  onAuth={togleAuthorized}
                ></Profile>
              } />

            <Route
              path='*'
              element={
                <PageNotFound></PageNotFound>
              } />

          </Routes>
          <Footer></Footer>
        </CurrentUserContext.Provider>
      </div>
    </div >
  );
}

export default App;