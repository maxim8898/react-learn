import React from 'react';
import {shallow, mount} from 'enzyme';
import {FilmTile} from "../src/components/FilmTile";

describe("FilmTile component", () => {
    const props = {
        genre: "genre",
        img: "/img",
        name: "Film name",
        year: 2000
    };

    it("FilmTile component rendered", () => {
        const component = shallow(
            <FilmTile {...props}/>
        );
        expect(component.find(".film-tile")).toHaveLength(1);
    });

    it("Snapshot", () => {
        const component = shallow(
            <FilmTile {...props}/>
        );
        expect(component).toMatchSnapshot();
    });
});