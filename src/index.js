import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import { BrowserRouter, Route } from 'react-router-dom';

/* Import Styles */
import './styles.css';

const Root = () => {
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <BrowserRouter>
      <div>
        <Route exact path={`${baseUrl}/`} component={Main} />
        <Route path="/search/" component={Main} />
      </div>
    </BrowserRouter>

  );
}

render(<Root />, document.querySelector("#app"));