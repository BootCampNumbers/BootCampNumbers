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
    api.getOutcomes({})
    .then(outcomes => this.setState({ outcomes }));
  }

  handleSearch(e) {
    if (e.target) {
      this.setState({ currentCampus: this.state.currentCampus });
    }
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
        handleSearch={this.state.handleSearch}
        handleLogin={this.state.handleLogin}
        bootCamp={this.state.currentBootCamp}
        campuses={this.state.currentCampuses}
        outcomes={this.state.outcomes}
      />
    );
  }
}

export default App;
