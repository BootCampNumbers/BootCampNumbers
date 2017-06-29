import React from 'react';
import PropTypes from 'prop-types';
import OutcomeObj from '../dataTypes/OutcomeObj';

/*
  Layout:
       | offer.taken.position                    |  Salary             |  Year  | Campus
 ICON  |  Offers: map of offers.company.name     |  offer.taken.salary |  oc.yr | frm bc
       |  outcome.# of apps . outcome.daysToHire |                     |        |
 */

class Outcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.state.takenOffer = props.outcome.offers.find(offer => offer.taken);
    this.state.company = this.state.takenOffer.company.name;
    this.state.position = this.state.takenOffer.position;
    this.state.salary = this.state.takenOffer.salary;
    this.state.icon = this.state.takenOffer.company[0].icon_link;
    this.state.year = `'${props.outcome.year % 2000}`;
    this.state.campus = props.campus;
    this.state.companies = props.outcome.offers.map(offer => offer.company.name);
    this.state.monthsToHire = props.outcome.monthsToHire;
    this.state.applications = props.outcome.applicationsSent;
    this.state.minority = props.outcome.minority;
  }

  render() {
    return (
      <div>
        <img src={this.state.icon} alt={this.state.company} />
        <span>{this.state.position}</span>
        <span>Offers: {this.state.companies}</span>
        <span>{this.state.applications} applications sent </span>
        <span>{this.state.monthsToHire} months to hire </span>
        <span>{this.state.minority ? 'Under-Represented Minority' : ''}</span>
        <span>Salary</span>
        <span>{this.state.salary}</span>
        <span>Year</span>
        <span>{this.state.year}</span>
        <span>Campus</span>
        <span>{this.state.campus}</span>
      </div>
    );
  }
}

Outcome.propTypes = {
  outcome: PropTypes.instanceOf(OutcomeObj),
  campus: PropTypes.string
};

export default Outcome;
