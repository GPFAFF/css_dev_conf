import React, { Component } from 'react';

import Header from './Header';
import Results from './Results';

class Main extends Component {
  constructor(props) {
    super()
    this.state = {
      talks: [],
      loading: true
    }
  }

  render() {
    return (
      <main>
        <Header message="CSS DEV CONF 2017" />
        <Results talks={this.state.talks} loading={this.state.loading} />
      </main>
    )
  }
}

export default Main;