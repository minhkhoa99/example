import React, { Component } from "react";
import CharactersItem from "../components/CharactersItem";
import Spinner from "../itemComponents/Snipper";
class CharactersContainer extends Component {
  state = {};
  render() {
    let { items, isLoading } = this.props;
    return isLoading ? (
      <Spinner />
    ) : (
      <section className='cards'>
        {items.map((item) => (
          <CharactersItem key={item.char_id} item={item}></CharactersItem>
        ))}
      </section>
    );
  }
}

export default CharactersContainer;
