import React from 'react';

class AddFamilyMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <form>
          <h4>Add family member</h4>
          <br></br>
          First Name: <input name="addFirstName"></input>
          Last Name: <input name="addLastName"></input>
          <button type="submit">Add</button>       
        </form>
    )
  }
}

export default AddFamilyMember;