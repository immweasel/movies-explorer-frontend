import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';

const SavedMovies = () => {
  return (
    <div>
      <p>SavedMovies</p> — компонент страницы с сохранёнными карточками фильмов.
      <MoviesCardList></MoviesCardList>
      <MoviesCard></MoviesCard>
    </div>
  );
}

export default SavedMovies;