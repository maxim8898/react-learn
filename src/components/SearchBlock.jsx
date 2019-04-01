import React from "react";
import { Switcher } from "./Switcher";

export class SearchBlock extends React.PureComponent {
    render() {
        return (
            <div className="search-block">
                <div className={"search-block-title"}>Find your movie</div>
                <SearchInput placeholder="Quentin Tarantino" />
                <Switcher
                    label={"Search by"}
                    containerClass={"search-by-block"}
                    classes={"search-by"}
                    checked={"title"}
                    options={["title", "genre"]}
                />
            </div>
        )
    }
}

function SearchInput(props) {
    return (
      <form>
          <input type="search" placeholder={props.placeholder}/>
          <input type="submit" value="Search"/>
      </form>
    );
}
