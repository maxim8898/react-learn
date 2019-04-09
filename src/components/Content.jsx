import React from "react";
import { FilmTile } from "./FilmTile";
import PropTypes from 'prop-types';

export function Content(props){
    return(
        <div className={"content"} key={"content"}>
            {
                props.data.map(
                    (film, i) => <FilmTile
                            key={i.toString()}
                            img={film.poster_path}
                            name={film.title}
                            year={Number(film.release_date)}
                            genre={film.genres[0]}
                        />
                    )
            }
        </div>
    )
}

Content.propTypes = {
    data: PropTypes.array.isRequired
};
