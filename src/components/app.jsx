import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: 'mFwqFZx1HxfQ4hwkz9'
    };
  }

  render() {
    const gifs = [
      { id: 'mFwqFZx1HxfQ4hwkz9' },
      { id: 'DOmoqqHVkhLos'},
      { id: '4uEdsl76ytnVu'}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
