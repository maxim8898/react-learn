import React from 'react';
import PropTypes from 'prop-types';
import Styled from './style';

class FilmBlock extends React.Component {
  componentDidMount() {
    this.props.fetchFilm(this.props.film_id);
  }

  render() {
    return (
      this.props.data ?
        <Styled>
          <div className="film-container">
            <img src={this.props.data.poster_path} />
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
        </Styled> : <div>Loading...</div>
    );
  }
}

FilmBlock.propTypes = {
  data: PropTypes.object.isRequired,
  fetchFilm: PropTypes.func.isRequired,
};

export default FilmBlock;
