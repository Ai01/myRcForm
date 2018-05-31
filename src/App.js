import React, { Component } from 'react';
import BasicForm from './example/basicUse';

const APP_SWITCH = 'basicForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        {APP_SWITCH === 'basicForm' ? <BasicForm /> : null}
      </div>
    );
  }
}

export default App;
