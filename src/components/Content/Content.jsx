import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import FilmTile from '../FilmTile';
import styles from './Content.css';

const Content = ({ sort_by, data, onClick }) => {
  const param = sort_by === 'rating' ? 'vote_average' : 'release_date';
  const sorted = data.sort((x, y) => (x[param] > y[param] ? 1 : -1));
  return (
    sorted.length ?
      <div className={styles.content} key="content">
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
      </div>
      : <div className={`${styles.content} ${styles['no-films']}`}>
        { 'No movies found yet, please try other query options.' }
      </div>
  );
};

Content.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Content;
