import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Family from './components/family.jsx';
import FamilyMemberList from './components/familyMemberList.jsx';
import RegisterFamily from './components/registerFamily.jsx';
import NavbarCustom from './components/navbar.jsx';
import Search from './components/search.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import data from '../../database/testData.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      families: data.families,    
      selectedFamily: data.families[0],
      currentFamilies: data.families
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleClick (familyId) {
    let currentFamilies = this.state.families;
    let selected = currentFamilies.filter(family => family.id === familyId);
    this.setState({selectedFamily: selected[0]});
  }

  handleSearch(e) {
    let value = e.target.value;
    let currentFamilies = this.state.families;
    let matchingFamilies = currentFamilies.filter(family => family.lastName === value);
    if (matchingFamilies.length > 0) {
      this.setState({currentFamilies: matchingFamilies});
    } else {
      this.setState({currentFamilies: currentFamilies});
    }
  }

  render() {
    return (
      <div id="customNavbar">
        <NavbarCustom />
          <div className="container row">
            <div className="col-md-3" id="families">
              <Search search={this.handleSearch} />
              <Link to="/family"><button>Add a family</button></Link>
              <ul className="list-group list-group-flush">
                {this.state.currentFamilies.map (family => {
                  return <Family key={family.id} click={this.handleClick} family={family} />
                })}
              </ul>
            </div>

            <div className="col-md-1 break"></div>
            
            <div className="container col-md-8 content" id="selectedFamily">
              <Route 
                  exact path="/" 
                  render={(props) => <FamilyMemberList {...props} family={this.state.selectedFamily} />} 
              />
              <Route path="/family" component={RegisterFamily}/>
              <Route path="/settings" component={Settings}/>
            </div>
          </div>
        </div>       
    )
  }
}

const Login = () => (
  <h1>Login</h1>

)

const Settings = () => (
  <h1>Should have navbar</h1>

)

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));
