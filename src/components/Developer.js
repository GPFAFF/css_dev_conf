import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import Header from './Header';
import PropTypes from 'prop-types';

class Developer extends Component {

  static propTypes = {
    params: PropTypes.object,
    developer: PropTypes.array
  }

  constructor() {
    super()
    this.state = {
      developer: [],
      loading: false
    }
  }
  componentWillMount() {
    console.log("DEVELOPER WILL MOUNT 🎧 🎧 🎧 🎧 🎧 🎧");
    this.renderPoints(this.state.developer);
  }

  componentDidMount() {
    console.log("DEVELOPER DID MOUNT 💩 💩 💩 💩 💩 💩");
    this.renderPoints(this.state.developer);
    this.loadTalks(this.props.match.params.developer_name);
  }

  loadTalks = async (developer_name) => {
    console.log(`Loading developer ${developer_name}`)

    this.setState({ loading: true });

    await fetch(`https://raw.githubusercontent.com/GPFAFF/css_dev_conf/master/data/${developer_name}.json`)
        .then(data => data.json())
        .then(res => {
          this.setState({ developer: res.data, loading: false });
        });
  }

  renderBackButton = () => {
    const baseUrl = process.env.PUBLIC_URL;
    return (
      <div>
        <button className="back">
          <Link to={`${baseUrl}/`}>Go Back!</Link>
        </button>
      </div>
    )
  }

  renderSlides = (developer) => {
    if (!developer.slides) return
    return (
      <h4 className="talk-slides">
        <a className="slides" target="_blank" rel="nopeneer noreferrer" href={developer.slides}>
          <div className="details">
            Check out their conference slides: <span className="slides">{developer.title}</span>
          </div>
        </a>
      </h4>
    );
  }

  renderPoints = (developer) => {
    if (!developer.info) return
    return (
      developer.info.map((item, id) =>
      <div className="summary" key={id}>
        <h4 className="headline">{item.headline}</h4>
        {item.points.map((points, id) =>
          <p key={id}
            className="points"
            dangerouslySetInnerHTML={{__html: points.topic}}/>
          )}
      </div>
      )
    )
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
          {this.renderBackButton()}
          <img className="card_image" src={developer.picture} alt={`Label of ${developer.nameDisplay}`} />
          {this.renderSlides(developer)}
          <h3 className="social">
            <a className="twitter" target="_blank" rel="nopeneer noreferrer" href={developer.twitter}>
              Follow this awesome developer! <span className="twitter">{developer.nameDisplay}</span>
            </a>
          </h3>
          <div className="learning">
            <h3>
              Talk Summary
            </h3>
              {this.renderPoints(developer)}
          </div>
        </div>
      </div>
    )
  }
}

export default Developer;