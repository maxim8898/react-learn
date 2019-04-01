import React from "react"

export class FilmTile extends React.PureComponent {
    constructor(props) {
        super (props);
    }

    render() {
        return(
            <div className={"film-tile"}>
                <img src={this.props.img}/>
                <div className={"film-name"}>{this.props.name}</div>
                <div className={"film-year"}>{this.props.year}</div>
                <div className={"film-genre"}>{this.props.genre}</div>
            </div>
        )
    }
}