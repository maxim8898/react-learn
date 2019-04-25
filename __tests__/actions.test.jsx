import {changeQuery, changeSearchBy, changeSortBy} from '../src/actions/changeParamsActions';

describe("Change params actions", () => {
    it("Change query", () => {
        const result = changeQuery({target: {value: "test query"}});
        expect(result).toEqual({ type: "CHANGE_QUERY", payload: "test query" })
    });

    it("Change search by options", () => {
        const result = changeSearchBy("title");
        expect(result).toEqual({ type: "CHANGE_SEARCH_BY", payload: "title" })
    });

    it("Change sort by options", () => {
        const result = changeSortBy("title");
        expect(result).toEqual({ type: "CHANGE_SORT_BY", payload: "title" })
    });
});