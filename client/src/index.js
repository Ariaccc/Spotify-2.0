import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import 'antd/dist/antd.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


import SearchPage from './pages/SearchPage';
import HomePage from './pages/HomePage';

ReactDOM.render(
  <div>
    <Router>
      <Switch>

        <Route exact
							path="/category"
							render={() => (
								<HomePage />
							)}/>
        {/* <Route exact
							path="/players"
							render={() => (
								<PlayersPage />
							)}/>
        <Route exact
							path="/matches"
							render={() => (
								<MatchesPage />
							)}/> */}
        <Route exact
							path="/search"
							render={() => (
								<SearchPage />
							)}/>
        <Route exact
							path="/"
							render={() => (
								<SearchPage />
							)}/>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);

