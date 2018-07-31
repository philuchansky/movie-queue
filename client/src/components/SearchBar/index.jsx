import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchMovies, clearSearchResults } from '../../actions/movies'
import { reset } from 'redux-form'
import Form from './Form'
import Results from './Results'
import './SearchBar.css'

class SearchBar extends React.Component {

  onFormSubmit({ term }) {
    this.props.searchMovies(term)
  }

  onFormChange({ term }) {
    if(term && term.length > 3) {
      this.props.searchMovies(term)
    } else {
      this.props.clearSearchResults()
    }
  }

  render() {
    const { searchResults, reset: clearForm, placeholder } = this.props
    return (
      <div className="SearchBar">
        <Form placeholder={placeholder}
          onChange={this.onFormChange.bind(this)}
          onSubmit={this.onFormSubmit.bind(this)}
        />
        <Results onResultClick={clearForm.bind(this, 'search')} items={searchResults} />
      </div>
    )
  }
}

SearchBar.defaultProps = {
  placeholder: "Search"
}

SearchBar.propTypes = {
  placeholder: PropTypes.string
}

const mapStateToProps = ({ searchResults }) => ({ searchResults })
export default connect(mapStateToProps, { searchMovies, clearSearchResults, reset })(SearchBar)