import React from 'react';
import FilmBlockContainer from '../../containers/FilmBlockContainer';

const FilmHeader = props => (
  <div>
    <FilmBlockContainer film_id={props.match.params.film_id} />
  </div>
);

export default FilmHeader;
