import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Movies from './Movies/Movies';
import SavedMovies from './SavedMovies/SavedMovies';
import Register from './Register/Register';
import Login from './Login/Login';
import Profile from './Profile/Profile';
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
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
            <Login></Login>
          } />

        <Route
          path='/profile'
          element={
            <Profile></Profile>
          } />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;