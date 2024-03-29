import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header>
       <Nav></Nav>
       <Footer></Footer>
      </div>
    );
  }
}

export default App;
