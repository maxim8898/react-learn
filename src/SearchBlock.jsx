import React from "react";
import { Header } from "./Header";
import { SearchBySwitch } from "./SearchBySwitch";

export class SearchBlock extends React.PureComponent {
    render() {
        return (
            <div className="search-block">
                <Header classes={"title-search"} title={"Find your movie"}/>
                <SearchInput placeholder="Quentin Tarantino" />
                <SearchBySwitch/>
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
