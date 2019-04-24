import { combineReducers } from "redux";
import {
    CHANGE_QUERY,
    CHANGE_SEARCH_BY,
    CHANGE_SORT_BY,
    CHANGE_FOUND,
    SWITCH_DISPLAY_MODE,
    SEARCH_MODE
} from '../actions/changeParamsActions';
import { FETCH_FILMS } from "../actions/featchActions";

const initialFinding = {
        query: "Quentin Tarantino",
        search_by: "title"
    };

function found(state = [], action) {
    switch (action.type) {
        case CHANGE_FOUND:
            return action.payload;

        case FETCH_FILMS:
            return { all: action.payload.data };

        default:
            return state;
    }
}

function finding(state = initialFinding, action) {
    switch (action.type) {
        case CHANGE_QUERY:
            return {
                ...state,
                query: action.payload
            };
        case CHANGE_SEARCH_BY:
            return {
                ...state,
                search_by: action.payload
            };

        default:
            return state;
    }
}

function showing(state = {sort_by: "rating", displayMode: SEARCH_MODE}, action) {
    switch (action.type) {
        case CHANGE_SORT_BY:
            return {
                ...state,
                sort_by: action.payload
            };

        case SWITCH_DISPLAY_MODE:
            return {
                ...state,
                displayMode: action.payload
            };
        default:
            return state;
    }
}

export default combineReducers({
    finding,
    showing,
    found,
});