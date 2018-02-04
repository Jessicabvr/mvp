import React from 'react';

class AddFamilyMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      gender: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.add(this.props.family.id, this.state.firstName, this.state.lastName, this.state.gender);
  }

  render() {
    return (
        <form>
          <h4>Add family member</h4>
          <br></br>
          First Name: <input name="addFirstName"></input>
          Last Name: <input name="addLastName"></input>
          Gender: <input name="addGender"></input>
          <button onClick={(e) => this.handleClick(e)}>Add</button>       
        </form>
    )
  }
}

export default AddFamilyMember;