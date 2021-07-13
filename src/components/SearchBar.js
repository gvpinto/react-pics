import React, { Component } from "react";

export class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={(e) => this.onFormSubmit(e)}>
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
