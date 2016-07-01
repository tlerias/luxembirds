import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import Main from './container/Main';

ReactDOM.render((
  <Router>
    <Route path="/" component={ Main } />
  </Router>
), document.getElementById('root'));