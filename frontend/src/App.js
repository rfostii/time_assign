import React, { Component } from 'react';
import './style.css';
import Auth from 'features/Auth'; 
import Navigation from 'components/Navigation/Navigation'; 
import Categories from 'components/Categories'; 
import Filter from 'features/Filter'; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Auth />      
        <Filter /> 
        <Categories /> 
      </div>
    );  
  }
}

export default App;
