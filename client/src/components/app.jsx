/* eslint-env browser */
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
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    this.getUser();
    this.getOutcomes({
      name: this.state.currentBootCamp,
      campus: this.state.currentCampus
    });
  }

  getUser() {
    const url = new URL(window.location);
    const params = new URLSearchParams(url.search.slice(1));
    if (params.has('user')) {
      this.setState({
        currentUser: params.get('user')
      });
    } else {
      /* eslint-disable no-console */
      console.log('ERROR - user should be set in query string');
      /* eslint-enable no-console */
    }
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
      <div>
        <Browse
          user={this.state.currentUser}
          handleSearch={this.handleSearch}
          handleLogin={this.handleLogin}
          bootCamp={this.state.currentBootCamp}
          campus={this.state.currentCampus}
          campuses={this.state.currentCampuses}
          outcomes={this.state.outcomes}
        />
      </div>
    );
  }
}

export default App;
