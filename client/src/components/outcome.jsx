import React from 'react';
import PropTypes from 'prop-types';
import OutcomeObj from '../dataTypes/OutcomeObj';

const Outcome = props =>
  (
    <div>
      {props.outcome}
    </div>
  );

Outcome.propTypes = {
  outcome: PropTypes.instanceOf(OutcomeObj)
};

export default Outcome;
