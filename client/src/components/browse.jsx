import React from 'react';
import PropTypes from 'prop-types';
import Hero from './hero';
import Outcomes from './outcomes';
import OutcomeObj from '../dataTypes/OutcomeObj';

const Browse = props =>
  (
    <div>
      <Hero
        user={props.user}
        handleSearch={props.handleSearch}
        bootCamp={props.bootCamp}
        campus={props.campus}
      />
      <Outcomes outcomes={props.outcomes} campus={props.campus} />
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
