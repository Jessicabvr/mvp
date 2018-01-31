import React from 'react';
import Need from './need.jsx';
import NoNeed from './noNeed.jsx';

class FamilyMember extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    var emptyNeed = { }
    if (this.props.person.needs.length > 0) {
      return (
        <div className="familyMemberDetail">
          <h3>{this.props.person.firstName + ' ' + this.props.person.lastName}  <button className="btn btn-outline-info btn-need">Add a Need</button></h3>
        
          <ul className="list-group">
            {this.props.person.needs.map(need => {return <Need key={need.id} need={need} />})}
          </ul>
        </div>
    )} else {

      return ( 
        <div className="familyMemberDetail">
          <h3>{this.props.person.firstName + ' ' + this.props.person.lastName}  <button className="btn btn-outline-info btn-need">Add a Need</button></h3>
        
          <ul className="list-group">
            <NoNeed />
          </ul>
        </div>


      )
    }
  }
}

export default FamilyMember;