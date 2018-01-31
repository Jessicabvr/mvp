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
        <input className="form-control" type="text"/>
        <button className="btn btn-outline-secondary search">Find</button>
      </div>
    )
  }
}

export default Search;