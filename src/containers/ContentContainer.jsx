import {connect} from 'react-redux';
import Content from '../components/Content';
import {fetchFilmById} from '../actions/featchActions';


const mapStateToProps = (state) => {
  const data = state.found.all ? state.found.all : [];
  return {
    data: data,
    sort_by: state.showing.sort_by,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(fetchFilmById(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
