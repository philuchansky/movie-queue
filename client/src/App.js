import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LogIn from './components/LogIn'
import FeaturedMovies from './components/FeaturedMovies'
import MovieDetail from './components/MovieDetail'

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <NavBar />
        <div className="main section">
          <div className="container">
            <Switch>
              <Route path="/login" component={LogIn} />
              <Route path="/movies/:title" component={MovieDetail} />
              <Route path="/" component={FeaturedMovies} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
