import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory} from "react-router";
import Layout from "./routes/layout";
import Home from "./routes/home";
import About from "./routes/about";
import configureStore from "./stores/store";
import { Provider } from 'react-redux';

let initialState = {		
	someVariable: true,
}

let store = configureStore(initialState);

const app = document.getElementById('app');


// ReactDOM.render((
//   <Provider store={store}>
// 	  <Router>
// 	    <Route path="/" component={Layout}>
// 	    <Route path="home" component={Home}/>
// 	      <Route path="about" component={About}/>
// 	      {<Route path="users" component={Users}>
// 	      	        <Route path="/user/:userId" component={User}/>
// 	      	      </Route>}
// 	      {/*<Route path="*" component={NoMatch}/>*/}
// 	    </Route>
// 	  </Router>
//   </Provider>

// ), app)


ReactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			{<Route path="about" component={About}></Route>}
		</Route>
	</Router>
	</Provider>
,app);


