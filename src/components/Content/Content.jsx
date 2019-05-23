import React from 'react';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { NavLink } from 'react-router-dom';
import FilmTile from '../FilmTile';
import Style from './style';

const Content = ({ sort_by, data, onClick }) => {
  const param = sort_by === 'rating' ? 'vote_average' : 'release_date';
  const getfilms = films => films;
  const sortFilms = createSelector(
    getfilms,
    items => items.sort((x, y) => (x[param] > y[param] ? 1 : -1)),
  );
  const sorted = sortFilms(data);
  return (
    sorted.length ?
      <Style>
        {
          sorted.map((film, i) =>
              (<NavLink
                to={`/film/${film.id}`}
                key={i.toString()}
                onClick={(function () {
                  onClick(film.id);
                })}
              >
                <FilmTile
                  genre={film.genres.join(', ')}
                  img={film.poster_path}
                  name={film.title}
                  year={Number(film.release_date.split('-')[0])}
                />
              </NavLink>))
        }
      </Style>
      : <Style className="no-films">
          { 'No movies found yet, please try other query options.' }
        </Style>
  );
};

Content.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Content;
