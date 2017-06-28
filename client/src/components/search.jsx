import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bootCamp: props.bootCamp,
      campus: props.campus
    };
  }

  handleBootCamp(e) {
    if (e.key === 'Enter') {
      this.handleSearch(e.target.value, this.state.campus);
    }
    this.setState({ bootCamp: e.target.value });
  }

  handleCampus(e) {
    if (e.key === 'Enter') {
      this.handleSearch(this.state.bootCamp, e.target.value);
    }
    this.setState({ campus: e.target.value });
  }

  handleClick() {
    this.handleSearch(this.state.bootCamp, this.state.campus);
  }

  handleSearch() {
    this.props.handleSearch(this.state.bootCamp, this.state.campus);
  }

  render() {
    return (
      <div>
        <h3> SEARCH VIEW </h3>
        <input
          type="text"
          value={this.state.bootCamp}
          onChange={this.handleBootCamp}
          onKeyUp={this.handleBootCamp}
        />
        <input
          type="text"
          value={this.state.campus}
          onChange={this.handleCampus}
          onKeyUp={this.handleCampus}
        />
        <button
          onClick={this.handleClick}
        > GO! </button>
      </div>
    );
  }
}

Search.propTypes = {
  bootCamp: PropTypes.string,
  campus: PropTypes.string,
  handleSearch: PropTypes.func
};

export default Search;
