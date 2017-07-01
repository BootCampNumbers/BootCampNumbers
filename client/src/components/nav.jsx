import React from 'react';
import PropTypes from 'prop-types';

const Nav = props =>
  (
    <div>
      <h1>Search Salaries and Outcomes</h1>
      {props.user}
    </div>
  );

Nav.propTypes = {
  user: PropTypes.string
};

export default Nav;
