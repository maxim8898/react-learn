import fetch from 'cross-fetch';
import * as reducerConstants from '../constants/reducerConstants';

export function fetchFilmsJson(search = "", searchBy = "title", limit = 10) {
    return dispatch => {
        const url = `https://reactjs-cdp.herokuapp.com/movies?search=${search}&searchBy=${searchBy}&limit=${limit}`;
        return fetch(url).then(response => response.json())
            .then(json => dispatch({
                type: reducerConstants.FETCH_FILMS,
                payload: json
            }));
    }
}

export function fetchFilmById(id) {
    return dispatch => {
        const url = `https://reactjs-cdp.herokuapp.com/movies/${id}`;
        return fetch(url).then(response => response.json())
            .then(json => dispatch({
                type: reducerConstants.FETCH_FILMS_BY_ID,
                payload: json
            }));
    }
}