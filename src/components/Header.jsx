import React from "react";
import PropTypes from 'prop-types';
import { SearchBlock } from "./SearchBlock";
import { Sorter } from "./Sorter";
import { Route, Switch, Redirect } from 'react-router-dom';
import FilmBlockContainer from '../containers/FilmBlockContainer';

const SearchHeader = props => (
  <React.Fragment>
    <div className={"search-container"}>
      <SearchBlock />
    </div>
    <div className={"highlighted"}>
      <Sorter number={props.number} />
    </div>
  </React.Fragment>
);

const FilmHeader = props => {
  return (
    <div>
      <FilmBlockContainer film_id={props.match.params.film_id} />
    </div>
  )
};

export function Header(props) {
  return (
    <Switch>
      <Route
        exact path="/"
        component={() => <SearchHeader number={props.number} />} />
      <Route
        path="/film/:film_id"
        component={FilmHeader} />
      <Redirect to="/" />
    </Switch>
  )
}

Header.propTypes = {
  number: PropTypes.number.isRequired,
};
