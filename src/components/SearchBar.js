import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label htmlFor='imageSearch'>Image Search</label>
            <input
              type='text'
              onChange={(e) => console.log(e.target.value)}
              name='imageSearch'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
