import React from "react";

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state= {term: ""};
}

render(){
  return(
    // same css name as component
    <div className="search-bar">
    <input
    value={this.state.term}
    onChange={event => this.onInputChange(event.target.value)} />
    </div>
  );
}

// onInputChange(event) {
// console.log(event);
// }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
};

export default SearchBar;