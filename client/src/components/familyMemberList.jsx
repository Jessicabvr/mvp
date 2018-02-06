import React from 'react';
import FamilyMember from './familyMember.jsx';
import AddFamilyMember from './addFamilyMember.jsx';

class FamilyMemberList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="familyDetail">
          <AddFamilyMember add={this.props.handleAdd} update={this.props.update} family={this.props.family} />       
          {this.props.family.members.map((person, index) => <FamilyMember update={this.props.update} key={index} person={person} />)}    
      </div>
    );
  }
}

export default FamilyMemberList

