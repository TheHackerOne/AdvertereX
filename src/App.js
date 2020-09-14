import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Layouts/Menu/Menu";
import BlogPage from "./components/BlogPage/BlogPage.jsx";

const App = () => {
	return (
		<>
			<Menu />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/blog' component={BlogPage} />
			</Switch>
		</>
	);
};

export default App;
