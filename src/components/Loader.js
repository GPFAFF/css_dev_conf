import React from 'react';
import PropTypes from 'prop-types';

const baseUrl = process.env.PUBLIC_URL;

const Loader = (props) => (

  <div className="loader">
    <img src={`${baseUrl}/img/fleur.svg`} alt="Loading..." />
    <h2>{props.message}</h2>
  </div>
);

Loader.propTypes = {
  message: PropTypes.string
};

export default Loader;
