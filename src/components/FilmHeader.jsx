import React from "react";
import FilmBlockContainer from '../containers/FilmBlockContainer';

export function FilmHeader(props) {
  return (
    <div>
      <FilmBlockContainer film_id={props.match.params.film_id} />
    </div>
  )
}
