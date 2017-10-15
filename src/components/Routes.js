import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './Main';
import Developer from './Developer';

class Routes extends Component {

  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path='/' component={Main} />
            {/* <CSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            > */}
              <Route path="/talks/:id/:developer_name" component={Developer} />
            {/* </CSSTransitionGroup> */}
          </div>
      </BrowserRouter>
    )
  }

}

export default Routes;