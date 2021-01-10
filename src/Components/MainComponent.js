import React, { Component } from 'react';
import SearchBar from './SearchBar'

class MainComponent extends Component {
    render() {
        return (
            <div>
                <h1>Where to Travel !!</h1>
                <SearchBar />
            </div>
        );
    }
}

export default MainComponent;