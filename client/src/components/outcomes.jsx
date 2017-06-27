import React from 'react';
import PropTypes from 'prop-types';
import Outcome from './outcome';
import OutcomeObj from '../dataTypes/OutcomeObj';

const Outcomes = props =>
  (
    <div>
      {props.outcomes.map(outcome =>
        (<Outcome outcome={outcome} key={outcome.id} />))}
    </div>
  );

Outcomes.propTypes = {
  outcomes: PropTypes.arrayOf(PropTypes.instanceOf(OutcomeObj))
};

export default Outcomes;
