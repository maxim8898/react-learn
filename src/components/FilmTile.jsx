import React from "react"
import PropTypes from 'prop-types';

export function FilmTile(props) {
  return (
    <div className={"film-tile"}>
      <img src={props.img} />
      <div className={"film-name"}>{props.name}</div>
      <div className={"film-year"}>{props.year}</div>
      <div className={"film-genre"}>{props.genre}</div>
    </div>
  )
}

FilmTile.propTypes = {
  genre: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
