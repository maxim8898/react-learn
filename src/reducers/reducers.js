import { combineReducers } from "redux";
import * as reducerConstants from '../constants/reducerConstants';

const initialFinding = {
        query: "",
        search_by: "title"
    };

function found(state = {}, action) {
    switch (action.type) {
        case reducerConstants.FETCH_FILMS:
            return { all: action.payload.data };

        default:
            return state;
    }
}

function finding(state = initialFinding, action) {
    switch (action.type) {
        case reducerConstants.CHANGE_QUERY:
            return {
                ...state,
                query: action.payload
            };
        case reducerConstants.CHANGE_SEARCH_BY:
            return {
                ...state,
                search_by: action.payload
            };

        default:
            return state;
    }
}

function showing(state = {sort_by: "rating", displayMode: reducerConstants.SEARCH_MODE}, action) {
    switch (action.type) {
        case reducerConstants.CHANGE_SORT_BY:
            return {
                ...state,
                sort_by: action.payload
            };

        case reducerConstants.SWITCH_DISPLAY_MODE:
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