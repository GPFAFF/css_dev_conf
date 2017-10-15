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

  componentWillMount() {
    console.log("MOUNT UP!!");
    const params = this.props.match.params || {};
    const searchTerm = params.searchTerm || undefined;
    this.loadTalks(searchTerm);
  }

  componentDidMount() {
    this.loadTalks();
  }

  loadTalks = async () => {
    this.setState({
      loading: true
    })

    const response = await fetch('https://raw.githubusercontent.com/GPFAFF/css_dev_conf/master/data/data.json')
    .then(res => res.json());

    const filteredTalks = response.data.filter(talk => talk);

    this.setState({
      talks: filteredTalks,
      loading: false
    });
  }

  render() {
    return (
      <main>
        <Header message="CSS DEV CONF 2017" />
        <p className="message"> A collection of the talks attended at the conference. All of these developers were remarkable and so talented.  Click on their name to check out their slides from the conference and make sure to give them a follow <span role="img" aria-label="Thumbs up emoji">👍 👍🏽 👍🏻 👍🏼 👍🏾 👍🏿</span> </p>
        <Results talks={this.state.talks} loading={this.state.loading} />
      </main>
    )
  }
}

export default Main;