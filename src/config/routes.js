// React
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';

const routes = (
  <Router
    history={browserHistory}
    onUpdate={()=> {
      setTimeout(()=>window.scrollTo(0, 0), 300);
    }}>
    <Route path={process.env.PUBLIC_URL + '/'} component={App}>
      <IndexRoute component={Home} />
      <Route path="Portfolio" component={Portfolio} />
      <Route path="Resume" component={Resume} />
    </Route>
  </Router>
);

export default routes;
