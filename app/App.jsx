import React from 'react';
import ReactDOM from 'react-dom';
import {
	Route,
    BrowserRouter as Router,
	Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import projectStore from './store.js';
import Blog from './containers/Blog/blog.jsx';
import Page404 from './containers/Page404/Page404.jsx';
import Home from './containers/Home/Home.jsx';
import './main.scss';

ReactDOM.render((
	<MuiThemeProvider>
		<Provider store={projectStore}>
			<Router>
				<div className="page-wrap">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/blog/:id" component={Blog} />
						<Route path="*" component={Page404} />
					</Switch>
				</div>
			</Router>
		</Provider>
	</MuiThemeProvider>),
	document.getElementById('app')
);