import React from 'react'
import { connect } from 'react-redux'
import { searchMovies } from '../../actions/movies'
import Form from './Form'
import Results from './Results'
import './SearchBar.css'

class SearchBar extends React.Component {

  onFormSubmit({ term }) {
    this.props.searchMovies(term)
  }

  onFormChange({ term }) {
    if(term && term.length > 3) this.props.searchMovies(term)
  }

  render() {
    const { searchResults } = this.props
    return (
      <div className="SearchBar">
        <Form onSubmit={this.onFormSubmit.bind(this)} onChange={this.onFormChange.bind(this)} />
        <Results items={searchResults} />
      </div>
    )
  }
}

const mapStateToProps = ({ searchResults }) => ({ searchResults })
export default connect(mapStateToProps, { searchMovies })(SearchBar)