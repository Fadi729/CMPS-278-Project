import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Apps from "./Pages/Apps";
import Books from "./Pages/Books";
import Games from "./Pages/Games";
import Movies from "./Pages/Movies";
import RouteTo from "./data/Routes";
import AppDetails from "./Pages/AppDetails";
import GameDetails from "./Pages/GameDetails";
import ToS from "./Pages/ToS";
import About from "./Pages/About";
import Layout from "./Components/Layout";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index path={RouteTo.Apps} element={<Apps />} />
				<Route path={RouteTo.AppsDetails} element={<AppDetails />} />
				<Route path={RouteTo.Games} element={<Games />} />
				<Route path={RouteTo.GameDetails} element={<GameDetails />} />
				<Route path={RouteTo.Movies} element={<Movies />} />
				<Route path={RouteTo.Books} element={<Books />} />
				<Route path={RouteTo.ToS} element={<ToS />} />
				<Route path={RouteTo.About} element={<About />} />
			</Route>
		</Routes>
	);
}

export default App;
