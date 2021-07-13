import React, { Component } from "react";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label htmlFor='imageSearch'>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              name='imageSearch'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
