import { combineReducers } from "redux";
import {
    CHANGE_QUERY,
    CHANGE_SEARCH_BY,
    CHANGE_SORT_BY,
    CHANGE_FOUND
} from '../actions/actions';
const initialFinding = {
        query: "Quentin Tarantino",
        search_by: "title"
    };

function foundFilmParam(state = [], action) {
    switch (action.type) {
        case CHANGE_FOUND:
            return action.payload;

        default:
            return state;
    }
}

function findingParam(state = initialFinding, action) {
    switch (action.type) {
        case CHANGE_QUERY:
            return [
                ...state,
                {
                    query: action.payload
                }
            ];
        case CHANGE_SEARCH_BY:
            return [
                ...state,
                {
                    search_by: action.payload
                }
            ];

        default:
            return state;
    }
}

function showingParam(state = {sort_by: "rating"}, action) {
    switch (action.type) {
        case CHANGE_SORT_BY:
            return [
                ...state,
                {
                    sort_by: action.payload
                }
            ];

        default:
            return state;
    }
}

const app = combineReducers({
    finding: findingParam,
    showing: showingParam,
    found: foundFilmParam
});

export default app;