import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Talks from './Talks';
import Loader from './Loader';

class Results extends Component {
  render() {

    if (this.props.loading) {
      return (
          <Loader message="⚡️️️️️⚡️️️️️⚡️️️️️⚡️️️️️⚡️️️️️INCOMING CONENT⚡️️️️️ ⚡️️️️️⚡️️️️️⚡️️️️️⚡️️️️️⚡️️️️️️⚡️️️️" />
      )
    }

    return (
      <div className="talks">
        {this.props.talks.map(
          details => <Talks key='1' details={details} />
        )}
      </div>
    )
  }
}

export default Results;