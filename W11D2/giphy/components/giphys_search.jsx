import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.fetchSearchGiphys(this.state.searchTerm);
        this.setState({ searchTerm: "" });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Search for giphs:
                        <input onChange={this.handleChange} type="text" value={this.state.searchTerm}/>
                    </label>
                </form>
                <GiphysIndex giphys={this.props.giphys}/>
            </>
        )
    }
}

export default GiphysSearch;