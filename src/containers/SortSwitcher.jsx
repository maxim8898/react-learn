import { connect } from 'react-redux';
import Switcher from '../components/Switcher';
import { changeSortBy } from '../actions/changeParamsActions';

const mapStateToProps = state => ({
  checked: state.showing.sort_by,
  classes: 'sort-by',
  containerClass: 'sort-by-block',
  label: 'Sort by',
  options: ['release date', 'rating'],
});

const mapDispatchToProps = dispatch => ({
  onSwitch: (name) => {
    dispatch(changeSortBy(name));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Switcher);

