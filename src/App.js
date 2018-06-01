import React, { Component } from 'react';
import BasicForm from './example/basicUse';
import MyForm from './myCode/exampleUse';

const APP_SWITCH = 'myForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        {APP_SWITCH === 'basicForm' ? <BasicForm /> : null}
        {APP_SWITCH === 'myForm' ? <MyForm /> : null}
      </div>
    );
  }
}

export default App;
