import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilmTile.css';

const FilmTile = ({
  img, name, year, genre,
}) => (
  <div className={styles['film-tile']}>
    <img src={img} />
    <div className={styles['film-name']}>{name}</div>
    <div className={styles['film-year']}>{year}</div>
    <div className={styles['film-genre']}>{genre}</div>
  </div>
);

FilmTile.propTypes = {
  genre: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default FilmTile;
