import React from "react";
import { Header } from "./Header";

export class SearchBySwitch extends React.PureComponent {
    render() {
        return (
            <div className="search-by">
                <Header title="Search By"/>
                <div className="switcher">
                    <div>
                        <input type="radio" name="option" id="title-option" checked/>
                        <label for="title-option">Title</label>
                    </div>
                    <div>
                        <input type="radio" name="option" id="genre-option" checked/>
                        <label for="genre-option">Genre</label>
                    </div>
                </div>
            </div>
        )
    }

}