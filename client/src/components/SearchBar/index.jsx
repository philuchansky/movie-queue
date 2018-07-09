import React from 'react'
import Form from './Form'
import './SearchBar.css'

class SearchBar extends React.Component {

  onFormSubmit({ term }) {
    console.log(term)
  }

  render() {
    return (
      <div className="SearchBar">
        <Form onSubmit={this.onFormSubmit.bind(this)} />
      </div>
    )
  }
}

export default SearchBar