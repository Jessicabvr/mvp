import React from 'react';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom'

class RegisterFamily extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastName: '',
      email: '',
    }

    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reRoute = this.reRoute.bind(this);
  }

  handleLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post(`http://localhost:1234/families`, {  
      family: {
        lastName: this.state.lastName,
        email: this.state.email
      }     
    })
    .then(response => {
      this.props.update(response.data.id);
      this.setState({ lastName: '', email: ''}, () => this.reRoute(response.data.id))
    })
    .catch(err => console.log(err));
  }

  reRoute(familyId) {
    this.props.history.push(`/current/${familyId}`)
  }

  render () {
    return (
      <div className="container">
        <h1> Register a new family </h1>
        
        <form>
            
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Family Last Name</label>
              <input onChange={(e) =>this.handleLastName(e)}type="text" className="form-control" id="inputLastName" value={this.state.lastName} aria-describedby="emailHelp"/>
            </div>
  
             <div className="form-group">
              <label htmlFor="exampleInputPassword1">Family Email</label>
              <input onChange={(e) => this.handleEmail(e)} value={this.state.email} type="email" className="form-control" id="inputEmail" />
            </div>
            <button onClick={(e) => this.handleSubmit(e)} className="btn btn-primary">Submit</button>
          
        </form>
      </div>
    )
  }
}

export default withRouter(RegisterFamily);