import React from 'react';
import ReactDOM from 'react-dom';

class Family extends React.Component {
  constructor(props) {
    super(props)
  }

  expandFamily() {

  }

  render() {
    return(
      <li onClick={(e) => this.props.click(this.props.family.id)} className="list-group-item" key={this.props.family.id}>
        {this.props.family.lastName}
        <span className="badge badge-pill badge-info">{this.props.family.members.length} Family Members</span>
      </li>
    );
    
  }
}

export default Family;