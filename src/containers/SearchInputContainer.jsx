import { connect } from 'react-redux';
import { SearchInput } from "../components/SearchInput";
import { changeQuery } from "../actions/changeParamsActions";
import { fetchFilmsJson } from "../actions/featchActions";

const mapStateToProps = (state) => {
  return {
    placeholder: "Quentin Tarantino",
    query: state.finding.query,
    search_by: state.finding.search_by
  }
};

const mergeProps = (stateProps, dispatchProps) => {
  const { dispatch } = dispatchProps;
  return {
    ...stateProps,
    onChangeQuery: (query) => {
      dispatch(changeQuery(query));
    },
    onClickSubmit: () => {
      dispatch(fetchFilmsJson(stateProps.query, stateProps.search_by))
    }
  }
};

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(SearchInput);
