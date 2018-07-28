import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import FeaturedMovies from './components/FeaturedMovies'
import MovieDetail from './components/MovieDetail'
import Queue from './components/Queue'
import Modal from './components/Modal'

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/" component={NavBar} />
        </Switch>
        <div className="main section">
          <div className="container">
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LogIn} />
              <Route path="/movies/:id" component={MovieDetail} />
              <ProtectedRoute path="/queue" component={Queue} />
              <Route path="/" component={FeaturedMovies} />
            </Switch>
          </div>
        </div>
        <Modal />
      </div>
    );
  }
}

export default App;
