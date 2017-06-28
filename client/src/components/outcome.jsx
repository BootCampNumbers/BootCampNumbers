import React from 'react';
import PropTypes from 'prop-types';
import OutcomeObj from '../dataTypes/OutcomeObj';

/*
  Layout:
       | offer.taken.position                    |  Salary             |  Year  | Campus
 ICON  |  Offers: map of offers.company.name     |  offer.taken.salary |  oc.yr | frm bc
       |  outcome.# of apps . outcome.daysToHire |                     |        |
 */

const Outcome = props =>
  (
    <div>
      <h3> OUTCOME VIEW </h3>
      <span>{props.outcome.year}</span>
    </div>
  );

Outcome.propTypes = {
  outcome: PropTypes.instanceOf(OutcomeObj)
};

export default Outcome;
