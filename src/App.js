import React, { Component } from 'react';
import BasicForm from './example/basicUse';
import FieldDelete from './example/fieldDelete';
import MyForm from './myCode/exampleUse';

const APP_SWITCH = 'fieldDelete';

class App extends Component {
  render() {
    return (
      <div className="App">
        {APP_SWITCH === 'basicForm' ? <BasicForm /> : null}
        {APP_SWITCH === 'fieldDelete' ? <FieldDelete/> : null}
        {APP_SWITCH === 'myForm' ? <MyForm /> : null}
      </div>
    );
  }
}

export default App;
