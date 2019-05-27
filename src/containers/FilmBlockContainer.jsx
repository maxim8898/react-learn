import { connect } from 'react-redux';
import FilmBlock from '../components/FilmBlock';
import { fetchFilmById } from '../actions/featchActions';

const mapStateToProps = state => ({
  ...state,
  data: state.found.selected,
});

const mapDispatchToProps = dispatch => ({
  fetchFilm: id => dispatch(fetchFilmById(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmBlock);
