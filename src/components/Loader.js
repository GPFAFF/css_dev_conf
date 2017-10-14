import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Loader extends Component {

  static propTypes = {
    message: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="loader">
        <img alt="Waiting to Load" src="/img/fleur.svg"/>
        <h2>{this.props.message}</h2>
      </div>
    )
  }
}

export default Loader;