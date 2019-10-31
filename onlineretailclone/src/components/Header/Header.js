import React, { Component } from 'react';
import './Header.css';
// import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <a href='/'>Home</a>
        <a href='/cart'>Cart</a>
      </div>
    );
  }
}
