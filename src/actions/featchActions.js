import fetch from 'cross-fetch';
export const FETCH_FILMS = "FETCH_FILMS";

export function fetchFilmsJson(search = "Movie", searchBy = "title", limit = 10) {
    return dispatch => {
        const url = `https://reactjs-cdp.herokuapp.com/movies?search=${search}&searchBy=${searchBy}&limit=${limit}`;
        return fetch(url).then(response => response.json())
            .then(json => dispatch({
                type: FETCH_FILMS,
                payload: json
            }));
    }
}