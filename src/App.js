import React, { Component } from 'react';
import Button from '@material/react-button';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Button
          raised
          className='button-alternate'
          onClick={() => console.log('clicked!')}
        >
          Click Me!
        </Button>
      </div>
    );
  }
}

export default App;
