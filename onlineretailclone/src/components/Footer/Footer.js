import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return(
      <div className='footer'>
        <a href='/'>Home</a> | <a href='/contact'>Contacts</a>
      </div>
    );
  }
}