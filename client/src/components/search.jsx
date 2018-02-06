import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    }
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input id="search-bar" onChange={(e) => this.props.search(e)}className="form-control" type="text"/>
      </div>
    )
  }
}

export default Search;