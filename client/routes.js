// import { Router, Route, Link, browserHistory } from 'react-router'
// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './app';

// let routes = (
//     <Route path="/" name="app" handler={App}>
//         <Route path="/index" name="index" handler={App} />
//     </Route>
// );

// export default routes;

import { Route } from 'react-router';  
import React from 'react';

import AppHandler from './components/AppHandler';

export default (  
  <Route handler={ AppHandler } path='/' />
);