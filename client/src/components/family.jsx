import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class Family extends React.Component {
  constructor(props) {
    super(props)
  }

  expandFamily() {

  }

  render() {
    return(
      <div>
        <li onClick={(e) => this.props.click(this.props.family.id)} className="list-group-item family" key={this.props.family.id}>
          {this.props.family.lastName}
          <Link to="/" className="badge badge-pill badge-dark">{this.props.family.members.length}</Link>
        </li>
      </div>
    );
    
  }
}

export default Family;