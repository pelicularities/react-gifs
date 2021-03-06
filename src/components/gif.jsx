import React, { Component } from 'react';

class Gif extends Component {
  selectGif = () => {
    this.props.updateSelectedGif(this.props.id);
  }

  render = () => {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} className="gif" onClick={this.selectGif} />
    );
  }
}

export default Gif;
