import React from 'react';
import {render} from 'react-dom';
import NLOComponent from './NLOComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Добро пожаловать в рубку, НЛО</p>
        <NLOComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));