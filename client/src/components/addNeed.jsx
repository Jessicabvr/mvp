import React from 'react';
import axios from 'axios';

class AddNeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
      offeredTypes: [],
      selectedType: null,
      selectedDescription: '',
      needTypes: { 
        'physical item':['household item', 'school item', 'clothing'],
        'community support':['translation', 'job support', 'childcare', 'prenatal support', 'tutoring'],
        'transportation': ['with families directly', 'not with families directly'],
        'money': ['donation']
      }
    }
    this.handleCategory = this.handleCategory.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.getSelectedCategory = this.getSelectedCategory.bind(this);
    this.getSelectedType = this.getSelectedType.bind(this);
    this.setTypes = this.setTypes.bind(this);
    this.submitNeed = this.submitNeed.bind(this);
  }

  handleCategory() {
    this.getSelectedCategory();
  }

  handleType() {
    this.getSelectedType();
  }

  handleDescription(e) {
    this.setState({
      selectedDescription: e.target.value
    });
  }

  getSelectedCategory() {
    let id = this.props.person.id;
    let node = document.getElementById(id.toString() + 'category-select');
    let text = node.options[node.selectedIndex].text;

    this.setState({
      selectedCategory: text,
      offeredTypes: this.state.needTypes[text]
    });
  }

  getSelectedType() {
    let id = this.props.person.id;
    let node = document.getElementById(id.toString() + 'type-select');
    let text = node.options[node.selectedIndex].text;

    this.setState({
      selectedType: text,
    });
  }

  setTypes(types) {
    let options = types.map(type => <option key={type}>{type}</option>);
    return options
  }

  submitNeed(e) {
    e.preventDefault();
    
    let familyId = this.props.person.familyId;
    let memberId = this.props.person.id;
    let category = this.state.selectedCategory;
    let type = this.state.selectedType;
    let description = this.state.selectedDescription;

    axios.post(`http://localhost:1234/families/${familyId}/members/${memberId}/needs`, {
      need: {
        category: category,
        type: type,
        description: description || null
      }     
    })
    .then(() => {
      this.setState({selectedDescription: ''});
      this.props.update(this.props.person.familyId, null);
    });  
  }

  render() {
 
    return (
      <li className="list-group-item add-need">
        <form>

          Category:
          <select onChange={this.handleCategory} name="category" id={this.props.person.id + "category-select"}>
            <option>category</option>
            <option>physical item</option>
            <option>transportation</option>
            <option>money</option>
            <option>community support</option>
          </select>

          Type:
          <select onChange={this.handleType}name="type" id={this.props.person.id + "type-select"}>
            <option>type</option>
            {this.setTypes(this.state.offeredTypes)}
          </select>
          <hr></hr>
          
          Description:
          <input value={this.state.selectedDescription} onChange={(e) => this.handleDescription(e)} id="description-select" className="description" name="description"></input>
        <button onClick={(e) => this.submitNeed(e)} className="btn btn-need">Add</button>

        </form>

    
        
     </li>




    )
  }
}

export default AddNeed;