import React from "react";
import { FilmTile } from "./FilmTile";

export class Content extends React.PureComponent {
    render() {
        return(
            <div className={"content"}>
                {this.props.data.map(
                    film => <FilmTile
                        img={film.poster_path}
                        name={film.title}
                        year={film.release_date}
                        genre={film.genres[0]}
                    />
                )}
            </div>
        )
    }
}