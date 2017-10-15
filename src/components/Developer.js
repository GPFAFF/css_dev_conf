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

    fetch(`https://raw.githubusercontent.com/GPFAFF/css_dev_conf/master/data/${developer_name}.json`)
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
        <div className="details">
          Check out their conference slides {developer.nameDisplay}
          </div>
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
          <img className="card_image" src={developer.picture} alt={`Label of ${developer.nameDisplay}`} />
          <h3>
            <Link to={`${developer.twitter}`}>
              Follow this awesome developer! {developer.nameDisplay}
            </Link>
          </h3>
          {this.renderSlides(developer)}
        </div>
      </div>
    )
  }
}

export default Developer;