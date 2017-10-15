import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Talks from './Talks';
import Loader from './Loader';

class Results extends Component {
  static PropTypes = {
    loading: PropTypes.bool.isRequired,
    talks: PropTypes.array.isRequired
  }

  render() {

    if (this.props.loading) {
      return (
          <Loader message="⚡️️️️️⚡️️️️️⚡️️️️️⚡️️️️️⚡️️️️️INCOMING CONENT⚡️️️️️ ⚡️️️️️⚡️️️️️⚡️️️️️⚡️️️️️⚡️️️️️️⚡️️️️" />
      )
    }

    return (
      <div className="talk-container">
        {this.props.talks.map(
          details => <Talks key={details.id} details={details} />
        )}
      </div>
    )
  }
}

export default Results;