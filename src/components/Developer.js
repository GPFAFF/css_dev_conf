import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import Header from './Header';
import PropTypes from 'prop-types';

class Developer extends Component {

  static propTypes = {
    params: PropTypes.object,
    developer: PropTypes.arrayOf(PropTypes.object)

  }

  constructor() {
    super()
    this.state = {
      developer: [],
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

  renderTalks = (developer) => {
    const talkingPoints = developer.info;

    // talkingPoints.forEach(item => {
    //   console.log(item);
    // })
    //const TalkingPoints = developer.info.map(value => console.log(value));
    // const talkingPoints = developer.info;
    // return (
    //   talkingPoints.forEach(value => <p className="talking-point">{value}</p>)
    // )



    //console.log(Object.entries(devTalks));
    // let value;

    // const talkingPoints = new Set(developer.info);
    // for (let points of talkingPoints) {
    //   value = points;
    // }
    // return (
    //   <p className="talking_point">{value}</p>
    // );
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
          <h4>
            Conference Talk
            {this.renderTalks(developer)}
          </h4>
        </div>
      </div>
    )
  }
}

export default Developer;