import React from 'react';
import PropTypes from 'prop-types';

const Search = props =>
  (
    <div>
      {props.bootCamp}
      {props.campuses}
      <button onClick={props.handleSearch} />
    </div>
  );

Search.propTypes = {
  bootCamp: PropTypes.string,
  campuses: PropTypes.arrayOf(PropTypes.string),
  handleSearch: PropTypes.func
};

export default Search;
