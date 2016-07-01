import React from 'react';
import { Router, Route, Link } from 'react-router';
import ReactDOM from 'react-dom';
import '../public/styles/index.scss';

import Main from './container/Main';

ReactDOM.render((
  <Router>
    <Route path="/" component={ Main } />
  </Router>
), document.getElementById('root'));