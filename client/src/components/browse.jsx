import React from 'react';
import PropTypes from 'prop-types';
import Hero from './hero'; 
import Outcomes from './outcomes';
import OutcomeObj from '../dataTypes/OutcomeObj';

const Browse = props =>
  (
    <div>
      <Hero hero={props}/>
      <Outcomes outcomes={props.outcomes} campus={props.campus} />
    </div>
  );

Browse.propTypes = {
  outcomes: PropTypes.arrayOf(PropTypes.instanceOf(OutcomeObj))
};

export default Browse;
