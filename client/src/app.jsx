import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Family from './components/family.jsx';
import FamilyMemberList from './components/familyMemberList.jsx';
import RegisterFamily from './components/registerFamily.jsx';
import NavbarCustom from './components/navbar.jsx';
import AddFamilyMember from './components/addFamilyMember.jsx';
import Search from './components/search.jsx';
import { Redirect, BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';

var testFamily = [
  {
    id: 1000,
    lastName: 'test',
    members: [
      {
        firstName: 'test1',
        lastName: 'test',
        needs: []
      }, 
      {
        firstName: 'test2',
        lastName: 'test',
        needs: []
      },
      {
        firstName: 'test3',
        lastName: 'test',
        needs: []
      },
      {
        firstName: 'test4',
        lastName: 'test',
        needs: []
      }
    ],
  },
  {
    id: 2000,
    lastName: 'testier',
    members: [
      {
        firstName: 'test5',
        lastName: 'testier',
        needs: []
      }
    ]
  }
]  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      families: testFamily,
      selectedFamily: testFamily[0],
      currentFamilies: testFamily,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getAllFamilies = this.getAllFamilies.bind(this);
    this.handleAddFamily = this.handleAddFamily.bind(this);
    this.setSelectedFamily = this.setSelectedFamily.bind(this);
    this.sortFamilyMembers = this.sortFamilyMembers.bind(this);
  }

  componentDidMount() {
    this.getAllFamilies(null, null);
  }

  handleClick (familyId) {
    this.setSelectedFamily(familyId); 
  }

  setSelectedFamily(familyId) {
    let currentFamilies = this.state.families;
    let selected = currentFamilies.filter(family => family.id === familyId);
    this.setState({selectedFamily: selected[0]});
  }

  handleSearch(e) {
    let value = e.target.value;
    let currentFamilies = this.state.families;
    let matchingFamilies = currentFamilies.filter(family => family.lastName.toLowerCase() === value.toLowerCase());
    if (matchingFamilies.length > 0) {
      this.setState({currentFamilies: matchingFamilies});
    } else {
      this.setState({currentFamilies: currentFamilies});
    }
  }

  handleAddFamily(familyId) {
    let selected = this.state.selectedFamily;
    this.getAllFamilies(selected.id, null);
  }

  sortFamilyMembers(members) {
    return members.sort((a, b) => (a.firstName[0] > b.firstName[0]) ? 1 : ((b.firstName[0] > a.firstName[0]) ? -1: 0));
  }

  getAllFamilies(familyId, callback) {
    axios.get('http://localhost:1234/families')
      .then(families => {
        let sorted = families.data.sort((a, b) => (a.lastName[0] > b.lastName[0]) ? 1 : ((b.lastName[0] > a.lastName[0]) ? -1 : 0));
        this.setState(previousState => ({families: sorted, currentFamilies: sorted}));
        this.setSelectedFamily(familyId || sorted[0].id)
      })
      .then(() => {
        if (callback) { callback() }
        if (familyId) {
          this.setSelectedFamily(familyId)
        }       
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="customNavbar">
        <NavbarCustom />
          <div className="container-fluid row">
            <div className="col-lg-3" id="families">
              <Search search={this.handleSearch} />
              <ul className="list-group list-group-flush">
                {this.state.currentFamilies.map (family => <Family key={family.id} click={this.handleClick} family={family} />)}
              </ul>
            </div>
            
            <div className="container col-lg-8 content" id="selectedFamily">

              <Route 
                exact path="/family" 
                render={(props) => <RegisterFamily {...props} update ={this.getAllFamilies} />}
              />
              <Route 
                path="/current/:familyId" 
                render={(props) => <FamilyMemberList {...props} handleAdd={this.handleAddFamily} update={this.getAllFamilies} family={this.state.selectedFamily} />}
              />             
            </div>
          </div>
        </div>       
    )
  }
}

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));
