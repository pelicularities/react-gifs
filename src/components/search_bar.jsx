import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.currentTarget.value);
  }

  render() {
    return (
      <input className="form-control form-search" type="text" onChange={this.handleUpdate} />
    );
  }
}

export default SearchBar;
