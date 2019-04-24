export const CHANGE_QUERY = 'CHANGE_QUERY';
export const CHANGE_SEARCH_BY = 'CHANGE_SEARCH_BY';
export const CHANGE_SORT_BY = 'CHANGE_SORT_BY';
export const CHANGE_FOUND = 'CHANGE_FOUND';
export const SWITCH_DISPLAY_MODE = "SWITCH_DISPLAY_MODE";
export const SEARCH_MODE = "SEARCH_MODE";

export function changeQuery(query) {
    query = query.target.value;
    return { type: CHANGE_QUERY, payload: query };
}

export function changeSearchBy(option) {
    return { type: CHANGE_SEARCH_BY, payload: option };
}

export function changeSortBy(option) {
    return { type: CHANGE_SORT_BY, payload: option };
}