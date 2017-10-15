import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => (
  <div className="loader">
    <img src="/img/fleur.svg" alt="Loading..." />
    <h2>{props.message}</h2>
  </div>
);

Loader.propTypes = {
  message: PropTypes.string
};

export default Loader;

// class Loader extends Component {

//   static propTypes = {
//     message: PropTypes.string.isRequired
//   }

//   render() {
//     return (
//       <div className="loader">
//         <img alt="Waiting to Load" src="./img/fleur.svg"/>
//         <h2>{this.props.message}</h2>
//       </div>
//     )
//   }
// }

// export default Loader;