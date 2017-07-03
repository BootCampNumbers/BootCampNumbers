import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Search from './search';

const filterName = name => ((name !== 'anonymous') ? `Welcome ${name}!` : 'Welcome!');


const Hero = props =>
  (
    <div className="hero">
      <Nav />
      <h5>glasscamp</h5>
      <h1 className="greeting">{filterName(props.user)}</h1>
      <h1>Search Salaries and Outcomes</h1>
      <Search
        handleSearch={props.handleSearch}
        bootCamp={props.bootCamp}
        campus={props.campus}
      />
    </div>
  );

Hero.propTypes = {
  user: PropTypes.string,
  handleSearch: PropTypes.func,
  bootCamp: PropTypes.string,
  campus: PropTypes.string
};

export default Hero;
