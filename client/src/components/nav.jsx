import React from 'react';
import PropTypes from 'prop-types';

const Nav = props =>
  (
    <div>
      {props.user}
    </div>
  );

Nav.propTypes = {
  user: PropTypes.string
};

export default Nav;
