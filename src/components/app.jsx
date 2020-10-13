import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: 'mFwqFZx1HxfQ4hwkz9'
    };

    this.search('golden retriever');
  }

  updateSelectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  search = (query) => {
    giphy('C0uzVlzNa2NMSapf91FyEJkdJ5BSBw6V').search({
      q: query,
      rating: 'g',
      limit: 20
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
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
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateSelectedGif={this.updateSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
