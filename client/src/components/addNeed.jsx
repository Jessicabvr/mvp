import React from 'react';

class AddNeed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-group-item add-need">
        <form>
          
          <select name="category">
            <option>category</option>
            <option>option1</option>
            <option>option2</option>
            <option>option3</option>
          </select>

          <select name="type">
            <option>type</option>
            <option>option1</option>
            <option>option2</option>
            <option>option3</option>
          </select>
          Description:
          <input className="description" name="description"></input>
        <button className="btn btn-need">Add a Need</button>

        </form>

    
        
     </li>




    )
  }
}

export default AddNeed;