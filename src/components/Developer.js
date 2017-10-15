import React, {Component} from 'react';
import Loader from './Loader';
import Header from './Header';
import Talks from './Talks'
import PropTypes from 'prop-types';

class Developer extends Component {

  constructor() {
    super()
    this.state = {
      developer: {},
      loading: false
    }
  }

  componentDidMount() {
    console.log("SINGLE DID MOUNT 💩");
    this.loadTalks(this.props.match.params.developer_name);
  }

  loadTalks = (developer_name) => {
    console.log(`Loading developer ${developer_name}`)

    this.setState({ loading: true });

    fetch(`https://raw.githubusercontent.com/GPFAFF/css_dev_conf/master/${developer_name}.json`)
        .then(data => data.json())
        .then(res => {
          this.setState({ developer: res.data, loading: false });
        });
  }

  render() {
    if (this.state.loading) {
      return (
        <Loader message="Here comes an awesome developer" />
      )
    }

    const { developer } = this.state;
    console.log(developer);

    return (
      <div>
        <Header message="CSS DEV CONF 2017!" />
        <div className="developer">
          {/* <h2>{talks}</h2> */}
          {/* <h3>{talks}</h3>
          <img src={talks} /> */}

          {/* <div className="beer-info">
            {this.renderGlass(beer)}
            {this.renderAbv(beer)}
          </div> */}
        </div>
      </div>
    )
  }
}

export default Developer;