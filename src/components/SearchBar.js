import React, { Component } from "react";

export class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label htmlFor='imageSearch'>Image Search</label>
            <input
              type='text'
              onChange={this.onInputChange}
              name='imageSearch'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
