import React from 'react';

class Need extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let claimed = this.props.need.claimed === true ? 'claimed' : 'unclaimed';
    let fulfilled = this.props.need.fulfilled === true ? 'met' : 'unmet';
    return (
      <li className="list-group-item need">
        {this.props.need.type} 
        <span className="badge badge-warning">{claimed}</span>
        <span className="badge badge-warning">{fulfilled}</span>
     </li>)
  }
}

export default Need;