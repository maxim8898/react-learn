import React from "react";
import PropTypes from 'prop-types';

export function FilmBlock(props) {
    return(
        <React.Fragment>
        <div className="film-container">
            <img src={props.data.poster_path}/>
            <div className="film-overview">
                <div className="film-title">
                    {props.data.title}
                    <div className="film-rating">
                        <div>{props.data.vote_average}</div>
                    </div>
                </div>
                <div className="film-tagline">{props.data.tagline}</div>
                <div className="film-year">
                    {props.data.release_date}
                    <div className="film-runtime">
                        {props.data.runtime} min
                    </div>
                </div>
                <div className="film-description">{props.data.overview}</div>
            </div>
        </div>
        <div className="highlighted">
            Films by <span className="genre">&ensp;{props.data.genres[0]}&ensp;</span> genre
        </div>
        </React.Fragment>
    )

}

FilmBlock.propTypes = {
    data: PropTypes.object.isRequired
};
