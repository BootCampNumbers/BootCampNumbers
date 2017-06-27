import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Search from './search';

const filterName = (name) => {
  if (name === 'anonymous') return 'INSERT_NAME_HERE';
  return name;
}

const Hero = props =>
  (
    <div className="hero">
      <Nav />
      <h5>glasscamp</h5>
      <h1>Search Salaries and Outcomes</h1>
      <h1 className="greeting">Hello {filterName(props.hero.user)}</h1>
      <Search
        handleSearch={props.hero.handleSearch}
        bootCamp={props.hero.bootCamp}
        campus={props.hero.campus}
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
