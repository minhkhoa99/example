import React, { Component } from "react";
class Search extends Component {
  state = {};
  render() {
    let { handleChange } = this.props;
    
    return (
      <section className='search'>
        <form>
          <input
            type='text'
            className='form-control'
            placeholder='Search characters'
            onChange={handleChange}
            autoFocus
          />
        </form>
      </section>
    );
  }
}

export default Search;
