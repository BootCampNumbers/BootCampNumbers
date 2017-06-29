import React from 'react';
import Browse from './browse';
import api from '../../lib/api';
import OutcomeObj from '../dataTypes/OutcomeObj';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'anonymous',
      currentCampus: 'San Francisco',
      currentBootCamp: 'Hack Reactor',
      currentCampuses: ['San Francisco', 'Austin', 'New York', 'Los Angeles'],
      bootCamps: [],
      outcomes: []
    };
  }

  componentDidMount() {
    this.getOutcomes({
      name: this.state.currentBootCamp,
      campus: this.state.currentCampus
    });
  }

  getOutcomes(options) {
    api.getOutcomes(options)
    .then((outcomes) => {
      this.setState({
        outcomes: outcomes.data.map(outcome => new OutcomeObj(outcome))
      });
    });
  }

  handleSearch(bootCamp, campus) {
    this.setState({
      currentBootCamp: bootCamp,
      currentCampus: campus
    });
    this.getOutcomes({ name: bootCamp, campus });
  }

  handleLogin(e) {
    if (e.target) {
      this.setState({ currentCampus: this.state.currentCampus });
    }
  }

  render() {
    return (
      <Browse
        user={this.state.currentUser}
        handleSearch={this.handleSearch}
        handleLogin={this.handleLogin}
        bootCamp={this.state.currentBootCamp}
        campus={this.state.currentCampus}
        campuses={this.state.currentCampuses}
        outcomes={this.state.outcomes}
      />
    );
  }
}

export default App;
