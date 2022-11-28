import React, { Component } from "react";
// import content from "../img/z3916930138864_e4a118c4f3bd5a500faa898d4783664f.jpg";
class CharactersItem extends Component {
  state = {};
  render() {
    let { item } = this.props;
    return (
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={item.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {item.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong>
                {item.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {item.birthday}
              </li>
              <li>
                <strong>Status:</strong> {item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CharactersItem;
