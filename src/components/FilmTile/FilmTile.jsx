import React from 'react';
import PropTypes from 'prop-types';
import Style from './style';

const FilmTile = ({
  img, name, year, genre,
}) => (
  <Style>
    <img src={img} />
    <div className="film-name">{name}</div>
    <div className="film-year">{year}</div>
    <div className="film-genre">{genre}</div>
  </Style>
);

FilmTile.propTypes = {
  genre: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default FilmTile;
