import React from 'react'
import { connect } from 'react-redux'
import { searchMovies } from '../../actions/movies'
import Form from './Form'
import './SearchBar.css'

class SearchBar extends React.Component {

  onFormSubmit({ term }) {
    this.props.searchMovies(term)
  }

  render() {
    return (
      <div className="SearchBar">
        <Form onSubmit={this.onFormSubmit.bind(this)} />
      </div>
    )
  }
}

export default connect(null, { searchMovies })(SearchBar)