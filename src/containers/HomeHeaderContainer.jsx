import { connect } from 'react-redux';
import HomeHeader from '../components/HomeHeader';

const mapStateToProps = (state) => {
  const filmLength = state.found.all ? state.found.all.length : 0;
  return {
    number: filmLength,
  };
};

export default connect(mapStateToProps)(HomeHeader);
