import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Family from './components/family.jsx';
import FamilyMemberList from './components/familyMemberList.jsx';
import RegisterFamily from './components/registerFamily.jsx';
import NavbarCustom from './components/navbar.jsx';
import AddFamilyMember from './components/addFamilyMember.jsx';
import Search from './components/search.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';
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
      currentFamilies: testFamily
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getAllFamilies = this.getAllFamilies.bind(this);
    this.addFamilyMember = this.addFamilyMember.bind(this);
  }

  componenetWillMount() {
    this.getAllFamilies();
  }

  componentDidMount() {
    this.getAllFamilies();
  }

  handleClick (familyId) {
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

  addFamily() {

  }

  addFamilyMember(familyId, firstName, lastName, gender) {
    axios.post(`http://localhost:1234/families/${familyId}`, {
      member: { firstName, lastName, gender }  
    })
    .then(member => console.log(member))
    .catch(err => console.log(err));
  }

  getAllFamilies() {
    axios.get('http://localhost:1234/families')
      .then(families => {
        console.log(families);
        this.setState({families: families.data, selectedFamily: families.data[0], currentFamilies: families.data});
      })
      .then(() => {
        console.log('retrieved families');
        this.forceUpdate();
      })
      .catch(err => console.log(err))
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
                {this.state.currentFamilies.map (family => <Family key={family.id} click={this.handleClick} family={family} />)}
              </ul>
            </div>

            <div className=" break"></div>
            
            <div className="container col-lg-9 content" id="selectedFamily">
              <Route 
                  exact path="/" 
                  render={(props) => <FamilyMemberList {...props} add={this.addFamilyMember} update={this.getAllFamilies} family={this.state.selectedFamily} />}
              />
              <Route path="/family" component={RegisterFamily}/>
            </div>
          </div>
        </div>       
    )
  }
}

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));
