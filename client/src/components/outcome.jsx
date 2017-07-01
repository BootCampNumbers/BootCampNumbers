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
      <div className="outcome">

        <div className="leftside">
          <div className="compLogo">
            <img className="logo" src={this.state.icon} alt={this.state.company}/>
          </div>
          <div className="desc">
            <h6 className="company">{this.state.position}</h6>
            <h6 className="offers">Offers: {this.state.companies}</h6>
            <h6 className="offers">{this.state.applications} applications sent • {this.state.monthsToHire} months to hire</h6>
            <h6 className="under">{this.state.minority ? 'Under-Represented Minority' : ''}</h6>
          </div>
        </div>

        <div className="rightside">
          <div className="key">
            <h3 className="heading">Salary</h3>
            <h4 className="value">$110K</h4>
          </div>
          <div className="key">
            <h3 className="heading">Year</h3>
            <h4 className="value">{this.state.year}</h4>
          </div>
          <div className="key">
            <h3 className="heading">Campus</h3>
            <h4 className="value">SF</h4>
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


      // <div>
      //   <img src={this.state.icon} alt={this.state.company} />
      //   <span>{this.state.position}</span>
      //   <span>Offers: {this.state.companies}</span>
      //   <span>{this.state.applications} applications sent </span>
      //   <span>{this.state.monthsToHire} months to hire </span>
      //   <span>{this.state.minority ? 'Under-Represented Minority' : ''}</span>
      //   <span>Salary</span>
      //   <span>{this.state.salary}</span>
      //   <span>Year</span>
      //   <span>{this.state.year}</span>
      //   <span>Campus</span>
      //   <span>{this.state.campus}</span>
      // </div>





      // <div class="outcome">

      //   <div class="leftside">
      //     <div class="comp-logo">
      //       <img class="logo" src="http://www.greenmedinfo.com/sites/all/themes/wilderness/images-upgrade/Google_icon_2015.png" />
      //     </div>
      //     <div class="desc">
      //       <h6 class="company">Google, Software Engineer</h6>
      //       <h6 class="offers">Offers from: Facebook, Lyft, Strype, Dropbox, Airbnb, Yelp</h6>
      //       <h6 class="offers">23 Applications sent • 6 months to hire</h6>
      //       <h6 class="under">Under-Represented Minority</h6>
      //     </div>
      //   </div>

      //   <div class="rightside">
      //     <div class="key-details">
      //       <h3 class="heading">Salary</h3>
      //       <h4 class="value">$110K</h4>
      //     </div>
      //     <div class="key-details">
      //       <h3 class="heading">Year</h3>
      //       <h4 class="value">'16</h4>
      //     </div>
      //     <div class="key-details">
      //       <h3 class="heading">Campus</h3>
      //       <h4 class="value">SF</h4>
      //     </div>
      //    </div>
         
      // </div>
