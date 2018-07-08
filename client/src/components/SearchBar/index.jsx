import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="text" placeholder="Mission Impossible" />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar