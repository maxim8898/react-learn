import { connect } from 'react-redux';
import { HomeHeader } from "../components/HomeHeader";

const mapStateToProps = (state) => {
  const film_length = state.found.all ? state.found.all.length : 0;
  return {
    number: film_length,
  }
};

export default connect(
  mapStateToProps
)(HomeHeader);