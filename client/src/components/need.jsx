import React from 'react';

class Need extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let claimed = this.props.need.claimed === true ? 'claimed' : 'unclaimed';
    let fulfilled = this.props.need.fulfilled === true ? 'met' : 'unmet';
    let claimedStyle = "badge badge-dark bg-beaver";
    let unclaimedStyle = "badge badge-dark bg-rose";
    
 
    return (
      <li className="list-group-item need">      
          <div className="category">Category: {this.props.need.category}    
           <span className="describe">Description: {this.props.need.description}</span>
           <span className={this.props.need.fulfilled === true ? claimedStyle : unclaimedStyle}>{fulfilled}</span>
           <span className={this.props.need.claimed === true ? claimedStyle : unclaimedStyle}>{claimed}</span>
          </div>
        
     </li>)
  }
}

export default Need;