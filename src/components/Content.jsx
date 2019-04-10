import React from "react";
import { FilmTile } from "./FilmTile";
import PropTypes from 'prop-types';

export function Content(props){
    return(
        <div className={"content"} key={"content"}>
            {
                props.data.map(
                    (film, i) => <FilmTile
                        genre={film.genres[0]}
                        img={film.poster_path}
                        key={i.toString()}
                        name={film.title}
                        year={Number(film.release_date)}
                    />
                )
            }
        </div>
    )
}

Content.propTypes = {
    data: PropTypes.array.isRequired
};
