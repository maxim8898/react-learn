export const CHANGE_QUERY = 'CHANGE_QUERY';
export const CHANGE_SEARCH_BY = 'CHANGE_SEARCH_BY';
export const CHANGE_SORT_BY = 'CHANGE_SORT_BY';
export const CHANGE_FOUND = 'CHANGE_FOUND';
export const GET_FILM_BY_ID = 'GET_FILM_BY_ID';

export function changeQuery(query) {
    return { type: CHANGE_QUERY, payload: query };
}

export function changeSearchBy(option) {
    return { type: CHANGE_SEARCH_BY, payload: option };
}

export function changeSortBy(option) {
    return { type: CHANGE_SORT_BY, payload: option };
}

export function changeFound(found) {
    return { type: CHANGE_FOUND, payload: found };
}

export function getFilmById(id) {
    return { type: GET_FILM_BY_ID, payload: id };
}