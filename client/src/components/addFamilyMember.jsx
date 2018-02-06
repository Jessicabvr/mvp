import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AddFamilyMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.addFamilyMember = this.addFamilyMember.bind(this);
  }

  handleFirstName(e) {
    this.setState({
      firstName: e.target.value
    });  
  }

  handleLastName(e) {
    this.setState({
      lastName: e.target.value
    });     
  }

  handleGender(e) {
    this.setState({
      gender: e.target.value
    });  
  }

  handleClick(e) {
    e.preventDefault();
    this.addFamilyMember(this.props.family.id, this.state.firstName, this.state.lastName, this.state.gender);
    this.setState({
      firstName: '',
      lastName: '',
      gender: ''
    });  
  }

  addFamilyMember(familyId, firstName, lastName, gender) {
    axios.post(`http://localhost:1234/families/${familyId}`, {
      member: { firstName, lastName, gender }  
    })
    .then((member) => {
      this.props.update(familyId, () => this.props.add(familyId));
    })
    .catch(err => console.log(err));
  }

  render() {
      return (     
        <li className="list-group-item addFamilyMember">
          <form>
            <h2 className="text-center">{this.props.family.lastName} Family</h2>
            First: <input value={this.state.firstName} onChange={ (e) => this.handleFirstName(e) } id="addFirstName" name="addFirstName"></input>
            Last: <input value={this.state.lastName} onChange={ (e) => this.handleLastName(e) }  id="addLastName" name="addLastName"></input>
            Gender: <input value={this.state.gender} onChange={ (e) => this.handleGender(e) }  id="addGender" name="addGender"></input>
            <button className="btn" onClick={ (e) => this.handleClick(e) }>Add</button>       
          </form>
        </li>   
      )
       
  }
}

export default AddFamilyMember;