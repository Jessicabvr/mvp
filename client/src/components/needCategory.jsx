import React from 'react';
import Need from './need.jsx';

class NeedCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="familyMemberDetail">
        <h4 className="fullName">Category: {this.props.category}</h4>
        <ul className="list-group category-list">
          {this.props.needs.map(need => <Need need={need} />)}
        </ul>
      </div>

    )
  }
}

export default NeedCategory;