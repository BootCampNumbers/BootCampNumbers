import React from 'react';
import PropTypes from 'prop-types';
import OutcomeObj from '../dataTypes/OutcomeObj';

const abbreviate = (city) => {
  const abbrvt = {
    'San Francisco': 'SF',
    'New York': 'NYC',
    Seattle: 'SEA',
    'Washington DC': 'DC',
    'Los Angeles': 'LA',
    Austin: 'AUS'
  };
  return abbrvt[city] || city;
};

const funcnumberWithCommas = (x) => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const withZeroes = `$${parts.join('.')}`;
  return `${withZeroes.slice(0, 4)}K`;
};

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
      <div className="outcome">
        <div className="leftside">
          <div className="compLogo left">
            <img className="logo" src={this.state.icon} alt={this.state.company} />
          </div>
          <div className="desc left">
            <h6 className="company">{this.state.position}</h6>
            <h6 className="offers">Offers: {this.state.companies}</h6>
            <h6 className="offers">
              {this.state.applications} applications sent • {this.state.monthsToHire} months to hire
            </h6>
            <h6 className="under">{this.state.minority ? 'Under-Represented Minority' : ''}</h6>
          </div>
        </div>
        <div className="rightside">
          <div className="key">
            <h3 className="heading">Salary</h3>
            <h4 className="value">{funcnumberWithCommas(this.state.salary)}</h4>
          </div>
          <div className="key">
            <h3 className="heading">Year</h3>
            <h4 className="value">{this.state.year}</h4>
          </div>
          <div className="key">
            <h3 className="heading">{this.state.campus ? 'Campus' : ''}</h3>
            <h4 className="value">{abbreviate(this.state.campus)}</h4>
          </div>
        </div>
      </div>
    );
  }
}

Outcome.propTypes = {
  outcome: PropTypes.instanceOf(OutcomeObj),
  campus: PropTypes.string
};

export default Outcome;
