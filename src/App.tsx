import { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import reactLogo from './assets/react.svg'
import "./App.css";
import NavBar from "./Components/NavBar";
import { RouteTo } from "./data/Routes";
import Apps from "./Pages/Apps";
import Books from "./Pages/Books";
import Games from "./Pages/Games";
import Movies from "./Pages/Movies";

function App() {

	return (
		// <NavBar />
		<Routes>
			<Route path="/" element={<NavBar />}>
				<Route index path={RouteTo.Apps} element={<Apps />} />
				<Route path={RouteTo.Games} element={<Games />} />
				<Route path={RouteTo.Movies} element={<Movies />} />
				<Route path={RouteTo.Books} element={<Books />} />
			</Route>
		</Routes>
	);
}

export default App;
