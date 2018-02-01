import React from 'react';

class RegisterFamily extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="container">
        <h1> Register a new family </h1>
        
        <form>
            
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Family Last Name</label>
              <input type="email" className="form-control" id="inputLastName" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Family Address</label>
              <input type="password" className="form-control" id="inputAddress" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Family Phone Number</label>
              <input type="password" className="form-control" id="inputPhone" placeholder="Password" />
            </div>
             <div className="form-group">
              <label htmlFor="exampleInputPassword1">Family Email</label>
              <input type="password" className="form-control" id="inputEmail" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          
        </form>
      </div>
    )
  }
}

export default RegisterFamily;