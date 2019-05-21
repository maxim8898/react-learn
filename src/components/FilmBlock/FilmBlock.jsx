import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilmBlock.css';

class FilmBlock extends React.Component {
  componentDidMount() {
    this.props.fetchFilm(this.props.film_id);
  }

  render() {
    return (
      this.props.data ?
        <React.Fragment>
          <div className={styles['film-container']}>
            <img src={this.props.data.poster_path} />
            <div className={styles['film-overview']}>
              <div className={styles['film-title']}>
                {this.props.data.title}
                <div className={styles['film-rating']}>
                  <div>{this.props.data.vote_average}</div>
                </div>
              </div>
              <div className={styles['film-tagline']}>{this.props.data.tagline}</div>
              <div className={styles['film-year']}>
                {this.props.data.release_date}
                <div className={styles['film-runtime']}>
                  {this.props.data.runtime} min
                </div>
              </div>
              <div className={styles['film-description']}>{this.props.data.overview}</div>
            </div>
          </div>
          <div className={styles.highlighted}>
            Films by <span className="genre">&ensp;{this.props.data.genres[0]}&ensp;</span> genre
          </div>
        </React.Fragment> : <div>Loading...</div>
    );
  }
}

FilmBlock.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FilmBlock;
