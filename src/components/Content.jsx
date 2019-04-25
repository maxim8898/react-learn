import React from "react";
import { FilmTile } from "./FilmTile";
import PropTypes from 'prop-types';

export function Content(props){
    const param = props.sort_by === 'rating' ? 'vote_average' : 'release_date';
    const sorted = props.data.sort((x, y) => { return x[param] > y[param] ? 1 : -1});
    return(
            sorted.length ?
                <div className={"content"} key={"content"}>
                    {
                        sorted.map(
                            (film, i) => <FilmTile
                                genre={film.genres.join(", ")}
                                img={film.poster_path}
                                key={i.toString()}
                                name={film.title}
                                year={Number(film.release_date.split("-")[0])}
                            />
                        )
                    }
                </div>
                : <div className={"content no-films"}>
                    { "No movies found yet, please try other query options." }
                </div>
    )
}

Content.propTypes = {
    data: PropTypes.array.isRequired
};
