import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    const { name, email, city } = this.props; 
    return (
      <div className='Hai'>
        {name} --- {email} --- {city}
      </div>
    );
  }
}

export default ClassComponent;
