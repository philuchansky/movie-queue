import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Switch>
          <Route path="/test" render={() => (
            <h1>test</h1>
          )} />
          <Route path="/" render={() => (
            <h1>Home</h1>
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
