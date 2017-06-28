import React from 'react';
import PropTypes from 'prop-types';

const Nav = props =>
  (
    <div>
      <h3> NAV BAR </h3>
      {props.user}
    </div>
  );

Nav.propTypes = {
  user: PropTypes.string
};

export default Nav;
