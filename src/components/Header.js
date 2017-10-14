import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {

  static propTypes = {
    message: PropTypes.string.isRequired
  }

  render() {
    const baseUrl = process.env.PUBLIC_URL;
    return (
      <h1>
      <Link to={`${baseUrl}/`}>{this.props.message}</Link>
      </h1>
    );
  }
}

export default Header;