import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav';
import Search from './search';
import Outcomes from './outcomes';
import OutcomeObj from '../dataTypes/OutcomeObj';

const Browse = props =>
  (
    <div>
      <Nav user={props.user} />
      <Search
        handleSearch={props.handleSearch}
        bootCamp={props.bootCamp}
        campus={props.campus}
      />
      <Outcomes outcomes={props.outcomes} />
    </div>
  );

Browse.propTypes = {
  user: PropTypes.string,
  handleSearch: PropTypes.func,
  bootCamp: PropTypes.string,
  campus: PropTypes.string,
  outcomes: PropTypes.arrayOf(PropTypes.instanceOf(OutcomeObj))
};

export default Browse;
