import React from "react";

export class FilmBlock extends React.PureComponent {
    render() {
        return(
            <React.Fragment>
            <div className="film-container">
                <img src={this.props.data.poster_path}/>
                <div className="film-overview">
                    <div className="film-title">
                        {this.props.data.title}
                        <div className="film-rating">
                            <div>{this.props.data.vote_average}</div>
                        </div>
                    </div>
                    <div className="film-tagline">{this.props.data.tagline}</div>
                    <div className="film-year">
                        {this.props.data.release_date}
                        <div className="film-runtime">
                            {this.props.data.runtime} min
                        </div>
                    </div>
                    <div className="film-description">{this.props.data.overview}</div>
                </div>
            </div>
            <div className="highlighted">
                Films by <span className="genre">&ensp;{this.props.data.genres[0]}&ensp;</span> genre
            </div>
            </React.Fragment>
        )
    }
}