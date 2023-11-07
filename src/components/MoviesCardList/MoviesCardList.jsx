import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { movies } from '../../utils/movies-list.js';
import { useLocation } from 'react-router-dom';
import { moviesSaved } from '../../utils/movies-list-saved.js';
import './MoviesCardList.css';

const MoviesCardList = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  const moviesList = movies.map((movie) => {
    return (
      <MoviesCard
        key={movie.id}
        movie={movie}
      />
    )
  });

  const moviesSavedList = moviesSaved.map((movie) => {
    return (
      <MoviesCard
        key={movie.id}
        movie={movie}
      />
    )
  });

  return (
    <section className='movies-list'>
      <ul className='movies-list__list'>
        {pathname === '/movies' ? moviesList : moviesSavedList}
      </ul>
      {pathname === '/movies' ? <button type='button' className='movies-list__btn-more' >Ещё</button>
        : <div className='movies-list__saveddevider'></div>}
    </section >
  );
}

export default MoviesCardList;