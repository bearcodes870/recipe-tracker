import React, { Component } from 'react';
import './App.css';
import RecipeList from './components/RecipeList/RecipeList';

class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">Recipe Tracker</header>
          <RecipeList />
        </div>
      );
    }
  }

export default App;
