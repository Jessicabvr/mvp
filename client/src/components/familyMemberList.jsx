import React from 'react';
import FamilyMember from './familyMember.jsx';
import AddFamilyMember from './addFamilyMember.jsx';
import { CSSTransitionGroup } from 'react-transition-group';

class FamilyMemberList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="familyDetail">
          <AddFamilyMember addFamily={this.props.addFamily} update={this.props.update} family={this.props.family} />  
          <CSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.props.family.members.map((person, index) => <FamilyMember addNeed={this.props.addNeed} update={this.props.update} key={index} person={person} />)}
        </CSSTransitionGroup>                  
      </div>
    );
  }
}

export default FamilyMemberList

