import React from 'react';
import FamilyMember from './familyMember.jsx';

class FamilyMemberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }
  }

  toggleShowDetail() {
    let current = this.state.hidden;
    this.setState({ hidden: !current });
  }

  render() {
    return (
      <div className="familyDetail">
        {this.props.family.members.map(person => <FamilyMember person={person} />)}           
      </div>
    );
  }
}

export default FamilyMemberList

