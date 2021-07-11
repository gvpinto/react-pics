import React, { Component } from "react";

export class SearchBar extends Component {
  state = { term: "" };
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
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
