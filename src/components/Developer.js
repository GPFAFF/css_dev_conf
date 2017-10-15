import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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

  renderSlides = (developer) => {
    if (!developer.slides) return
    return (
      <h4>
        <Link to={`${developer.slides}`}>
          {developer.nameDisplay} slides
        </Link>
      </h4>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <Loader message="Here comes an awesome developer" />
      )
    }

    const { developer } = this.state;

    return (
      <div>
        <Header message="CSS DEV CONF 2017!" />
        <div className="developer">
          <h2>{developer.title}</h2>
          <h3>
            <Link to={`${developer.twitter}`}>
              {developer.nameDisplay}
            </Link>
          </h3>
          {this.renderSlides(developer)}
        </div>
      </div>
    )
  }
}

export default Developer;