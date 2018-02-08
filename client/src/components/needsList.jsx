import React from 'react';
import NeedCategory from './needCategory.jsx';

class NeedsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      needs: this.props.needs
    }

    this.setUnmetNeeds = this.setUnmetNeeds.bind(this);
  }

  componentDidMount() {
    if (this.props.listType === "unmet") {    
      this.setUnmetNeeds()
    }
  }

  setUnmetNeeds() {
    let unmetOnly = {};
    Object.keys(this.props.needs).map(type => {
      unmetOnly[type] = this.props.needs[type].filter(need => need.fulfilled === false);
    });
      
    this.setState({needs: unmetOnly}, () => this.forceUpdate());
  }

  render() {
    return (
      <div>
        <h1>All Needs</h1>        
          {Object.keys(this.state.needs).map(type => <NeedCategory key={type} category={type} needs={this.state.needs[type]} /> )}                 
      </div>
    )
  }
}

export default NeedsList;