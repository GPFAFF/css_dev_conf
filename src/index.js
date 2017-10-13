import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles.css';

const Root = () => {
  return (
    // <BrowserRouter>
    //   <div>
    //     <Route exact path="/" component={Main} />
    //   </div>
    // </BrowserRouter>
    <h1> CSS DEV CONF 2017 </h1>

  );
}

render(<Root />, document.querySelector("#app"));