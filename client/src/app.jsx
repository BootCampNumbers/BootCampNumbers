import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <a href="/auth/github">Sign in with github</a><br />
        <a href='/logout'>logout</a>
      </div>
    );
  }
}

export default App;
