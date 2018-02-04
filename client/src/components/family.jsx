import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class Family extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <li onClick={(e) => this.props.click(this.props.family.id)} className="list-group-item family" key={this.props.family.id}>
          <Link to="/" className="link family-link">{this.props.family.lastName}</Link>
          <span className="badge badge-pill badge-dark">{this.props.family.members.length}</span>
        </li>
      </div>
    );
    
  }
}

export default Family;