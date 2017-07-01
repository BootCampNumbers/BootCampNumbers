import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bootCamp: props.bootCamp,
      campus: props.campus
    };
    this.handleSearch = props.handleSearch;
    this.handleBootCamp = this.handleBootCamp.bind(this);
    this.handleCampus = this.handleCampus.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    return (

    <form className="search">
      <input className="searchquery" size="40" type="text" name="bootcamp" value={this.state.bootCamp} onChange={this.handleBootCamp} onKeyUp={this.handleBootCamp} />
      <input className="searchquery" size="40" type="text" name="campus" value={this.state.campus} onChange={this.handleCampus} onKeyUp={this.handleCampus}/>
      <button value="S" onClick={this.handleClick}>S</button>
    </form>

      
    );
  }
}

Search.propTypes = {
  bootCamp: PropTypes.string,
  campus: PropTypes.string,
  handleSearch: PropTypes.func
};

export default Search;

/*


<input className="searchquery" size="40" type="text" name="bootcamp" placeholder="   Search by Bootcamp..." />
      <input className="searchquery" size="40" type="text" name="campus" placeholder="   Search Campus..." />
           <input type="submit" value="S" onClick={this.handleClick} />


<div>
        <input
          value={this.state.bootCamp}
          onChange={this.handleBootCamp}
          onKeyUp={this.handleBootCamp}
        />
        <input
          value={this.state.campus}
          onChange={this.handleCampus}
          onKeyUp={this.handleCampus}
        />
        <button
          onClick={this.handleClick}
        > GO! </button>
      </div>

      */
