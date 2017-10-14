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

  componentDidMount() {
    this.loadTalks();
  }

  loadTalks = async () => {
    this.setState({
      loading: true
    })

    const response = await fetch('https://raw.githubusercontent.com/GPFAFF/css_dev_conf/master/data.json')
    .then(res => res.json());

    const filteredTalks = response.data.filter(talk => talk.icon);
    console.log("****RESPONSE***", response);

    this.setState({
      talks: filteredTalks,
      loading: false
    });
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