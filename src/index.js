import React from 'react';
import { render } from 'react-dom';

import Routes from './components/Routes';

/* Import Styles */
import './styles.css';

class Root extends React.Component {
  render() {
    return (
      <Routes />
    )
  }
}

render(<Root />, document.querySelector("#app"));