import React from 'react';
import Need from './need.jsx';
import NoNeed from './noNeed.jsx';

class FamilyMember extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      needs: this.props.person.needs
    }
    this.sortNeeds = this.sortNeeds.bind(this);
  }

  componentDidMount () {
    this.sortNeeds();
  }

  sortNeeds() {
    let needs = this.state.needs;
    let sorted = needs.sort((a, b) => a.claimed > b.claimed);
    this.setState({ needs: sorted });

  }

  render () {

    if (this.props.person.needs.length > 0) {
      return (
        <div className="familyMemberDetail">
          <h4>{this.props.person.firstName + ' ' + this.props.person.lastName}  <button className="btn btn-need">Add a Need</button></h4>
        
          <ul className="list-group">
            {this.state.needs.map(need => {return <Need key={need.id} need={need} />})}
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