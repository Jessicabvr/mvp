import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Family from './components/family.jsx';
import FamilyMemberList from './components/familyMemberList.jsx';
import RegisterFamily from './components/registerFamily.jsx';
import NavbarCustom from './components/navbar.jsx';
import AddFamilyMember from './components/addFamilyMember.jsx';
import Settings from './components/settings.jsx';
import AllNeeds from './components/allNeeds.jsx';
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
      needs: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getAllFamilies = this.getAllFamilies.bind(this);
    this.handleAddFamily = this.handleAddFamily.bind(this);
    this.handleAddNeed = this.handleAddNeed.bind(this);
    this.setSelectedFamily = this.setSelectedFamily.bind(this);
    this.sortFamilyMembers = this.sortFamilyMembers.bind(this);
    this.getAllNeeds = this.getAllNeeds.bind(this);
  }

  componentDidMount() {
    this.getAllFamilies(null, null);
    this.getAllNeeds();
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

  handleAddNeed(familyId) {
    this.getAllFamilies(familyId, () => {
      this.getAllNeeds();
    });
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
        this.getAllNeeds(() => console.log('retrieved needs'))       
      })
      .catch(err => {
        console.log(err);
      });
  }

  getAllNeeds(callback) {
    axios.get('http://localhost:1234/needs/all')
         .then(needs => {
            this.setState({needs: needs.data});
            if(callback) { callback(); }
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
                exact path="/" 
                render={(props) => <RegisterFamily {...props} update ={this.getAllFamilies} />}
              />

               <Route 
                path="/needs" 
                render={(props) => <AllNeeds {...props} needs={this.state.needs} update ={this.getAllFamilies} />}
              />

              <Route 
                  exact path="/settings" 
                  render={(props) => <Settings {...props} update ={this.getAllFamilies} />}
              />

              <Route 
                exact path="/register" 
                render={(props) => <RegisterFamily {...props} update ={this.getAllFamilies} />}
              />
              <Route 
                path="/current/:familyId" 
                render={(props) => <FamilyMemberList {...props} sort={this.sortFamilyMembers} addNeed={this.handleAddNeed} addFamily={this.handleAddFamily} update={this.getAllFamilies} family={this.state.selectedFamily} />}
              />             
            </div>
          </div>
        </div>       
    )
  }
}

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));
