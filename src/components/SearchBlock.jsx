import React from "react";
import SearchInputContainer from "../containers/SearchInputContainer";
import SearchSwitcher from "../containers/SearchSwitcher";

export function SearchBlock() {
  return (
    <div className="search-block">
      <div className={"search-block-title"}>Find your movie</div>
      <SearchInputContainer />
      <SearchSwitcher />
    </div>
  )
}
