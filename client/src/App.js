import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import FeaturedMovies from './components/FeaturedMovies'
import MovieDetail from './components/MovieDetail'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <NavBar />
        <div className="main section">
          {/* <FontAwesomeIcon icon={faCoffee} /> */}
          <Switch>
            <Route path="/test" render={() => (
              <h1>test</h1>
            )} />
            <Route path="/movies/:title" component={MovieDetail} />
            <Route path="/" component={FeaturedMovies} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
