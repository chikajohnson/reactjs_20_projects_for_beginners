import React, { Component } from 'react';
import './App.css';
import AppHeader from './app-header';
import Movies from './albums';
import Footer from './footer';
class App extends Component {
  render() {
    return (
      <div className="App">        
       <AppHeader />
       <Movies />
       <Footer />
      </div>
    );
  }
}

export default App;
