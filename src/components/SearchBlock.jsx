import React from "react";
import { Switcher } from "./Switcher";

export class SearchBlock extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.onSwitch = this.onSwitch.bind(this);
        this.state = {}
    }

    onSwitch(name) {
        this.props.onSwitch(name);
    }

    onChangeQuery(query) {
        this.props.onChangeQuery(query);
    }

    render() {
        return (
            <div className="search-block">
                <div className={"search-block-title"}>Find your movie</div>
                <SearchInput placeholder="Quentin Tarantino" query={this.props.query} onChangeQuery={this.onChangeQuery}/>
                <Switcher
                    onSwitch={this.onSwitch}
                    label={"Search by"}
                    containerClass={"search-by-block"}
                    classes={"search-by"}
                    checked={this.props.search_by}
                    options={["title", "genre"]}
                />
            </div>
        )
    }
}

class SearchInput extends React.PureComponent{
    constructor(props) {
        super(props);
        this.onChangeQuery = this.onChangeQuery.bind(this);
    }

    onChangeQuery(e) {
        this.props.onChangeQuery(e.target.value);
    }

    render() {
        return (
            <form>
                <input type="search" placeholder={this.props.placeholder} value={this.props.query} onChange={this.onChangeQuery}/>
                <input type="submit" value="Search"/>
            </form>
        );
    }
}
