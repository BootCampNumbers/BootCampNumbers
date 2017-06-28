import React from 'react';
import Browse from './browse';
import api from '../../lib/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'anonymous',
      currentCampus: 'San Francisco',
      currentBootCamp: 'HackReactor',
      currentCampuses: ['San Francisco', 'Austin', 'New York', 'Los Angeles'],
      bootCamps: [],
      outcomes: []
    };
  }

  componentDidMount() {
    this.getOutcomes({});
  }

  getOutcomes(options) {
    api.getOutcomes(options)
    .then(outcomes =>
      this.setState({ outcomes })
    );
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
