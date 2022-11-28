import React, { Component } from "react";
import Header from "./itemComponents/Header";
import "./App.css";
import Search from "./itemComponents/Search";
import CharactersContainer from "./components/CharactersContainer";
import axios from "axios";

class App extends Component {
  state = {
    items: [],
    isloading: true,
    query: "",
    text:"",
    filterItems:[]
  };

  componentDidMount =()=>{
    const fetchItem = async () => {
      this.setState({
        isloading: true,
      });
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${this.state.query}`
      );
      this.setState({
        items: result.data,
      });
     

      this.setState({
        isloading: false,
      });
    };
    fetchItem();
   
  }
  onChange =(e)=>{
    let query = e.target.value
    this.setState({
      query: query,
      filterItems:this.state.items.filter((e)=>{
        return e.name.toLowerCase().includes(this.state.query.toLowerCase());
      })
    })
   
  console.log(query);
   console.log(this.state.filterItems);
  }
  render() {
   
    return (
      <div className='container'>
        <Header />
        <Search filterItems={this.state.filterItems} handleChange={this.onChange} />
        <CharactersContainer
          isloading={this.state.isloading}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default App;
