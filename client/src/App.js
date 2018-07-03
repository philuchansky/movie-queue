import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import FeaturedMovies from './components/FeaturedMovies'

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Switch>
          <Route path="/test" render={() => (
            <h1>test</h1>
          )} />
          <Route path="/" component={FeaturedMovies} />
        </Switch>
      </div>
    );
  }
}

export default App;
