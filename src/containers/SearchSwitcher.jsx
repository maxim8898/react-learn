import { connect } from 'react-redux';
import { Switcher } from "../components/Switcher";
import { changeSearchBy } from "../actions/changeParamsActions";

const mapStateToProps = (state) => {
  return {
    checked: state.finding.search_by,
    classes: "search-by",
    containerClass: "search-by-block",
    label: "Search By",
    options: ["title", "genre"]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitch: (name) => {
      dispatch(changeSearchBy(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
