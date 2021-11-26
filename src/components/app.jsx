import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
    render() {
        const gifs = [
            {id:"pVkmGyqYRt4qY"},
            {id: "QvwMDYpAMUm6Q"},
            {id: "cuPm4p4pClZVC"},
            {id: "8PsTsGXP1QB3LihxTB"}
    
        ];
        return (
            <div> 
                <div className="left-scene">
                    <SearchBar />
                    <div className="selected-gif">
                        <Gif  id = "pVkmGyqYRt4qY" />
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs = {gifs}/>
                </div>
            </div>
        );

    }
}

export default App; 