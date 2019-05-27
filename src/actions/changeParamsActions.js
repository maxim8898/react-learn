import * as reducerConstants from '../constants/reducerConstants';

export function changeQuery(query) {
  const queryString = query.target.value;
  return { type: reducerConstants.CHANGE_QUERY, payload: queryString };
}

export function changeSearchBy(option) {
  return { type: reducerConstants.CHANGE_SEARCH_BY, payload: option };
}

export function changeSortBy(option) {
  return { type: reducerConstants.CHANGE_SORT_BY, payload: option };
}
