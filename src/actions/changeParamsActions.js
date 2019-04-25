import * as reducerConstants from '../constants/reducerConstants';

export function changeQuery(query) {
    query = query.target.value;
    return { type: reducerConstants.CHANGE_QUERY, payload: query };
}

export function changeSearchBy(option) {
    return { type: reducerConstants.CHANGE_SEARCH_BY, payload: option };
}

export function changeSortBy(option) {
    return { type: reducerConstants.CHANGE_SORT_BY, payload: option };
}