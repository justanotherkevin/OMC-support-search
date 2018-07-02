import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './dataCheatSheet.json'
import SearchBar from './components/searchBar';
import SearchBarResults from './components/searchBarResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
  }
  componentWillMount() {
    // const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    // const cities = [];
    // fetch(endpoint)
    //   .then(blob => blob.json())
    //   .then(data => cities.push(...data));
    // this.setState({cities} )
    const cheatSheetData = [], cheatSheetVoodooscope = [] 
    cheatSheetData.push(...data.FAQs);
    cheatSheetVoodooscope.push(...data['Voodooscope User Dashboard']);
    this.setState({cheatSheetData, cheatSheetVoodooscope})

  }
  componentDidMount() {
  
  }
  searchBarHandleChange = (e) => {
    const searchMatches = []
    searchMatches.push (...this.findMatches( this.state.searchInput, this.state.cheatSheetData) ) 

    this.setState({
      searchInput: e.target.value,
      searchMatches
    })
    
  }
  findMatches = (wordToMatch, answers) => {
    return answers.filter( answer => {
      // here we need to figure out if the city or state matches what was searched
      const regex = new RegExp(wordToMatch, 'gi');
      return answer["Question"].match(regex) || answer["What you do/What it means"].match(regex)
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. {this.state.searchInput}
        </p>
        <SearchBar 
          searchInput={this.state.searchInput} 
          searchBarHandleChange={this.searchBarHandleChange}
        />
        <SearchBarResults 
          searchInput={this.state.searchInput} 
          content={this.state.searchMatches}
        />
      </div>
    );
  }
}

export default App;
