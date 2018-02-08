import React from 'react';
import NeedCategory from './needCategory.jsx';

class AllNeeds extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>All Needs</h1>        
          {Object.keys(this.props.needs).map(type => <NeedCategory category={type} needs={this.props.needs[type]} /> )}                 
      </div>
    )
  }
}

export default AllNeeds;