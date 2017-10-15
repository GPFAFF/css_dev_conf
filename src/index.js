import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import Developer from './components/Developer';
import { BrowserRouter, Route } from 'react-router-dom';

/* Import Styles */
import './styles.css';

const Root = () => {
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <BrowserRouter>
      <div>
        <Route exact path={`${baseUrl}/`} component={Main} />
        <Route path="/talks/:id/:developer_name" component={Developer} />
      </div>
    </BrowserRouter>

  );
}

render(<Root />, document.querySelector("#app"));