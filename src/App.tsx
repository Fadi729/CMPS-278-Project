import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";

import Apps from "./Pages/Apps";
import Books from "./Pages/Books";
import Games from "./Pages/Games";
import Movies from "./Pages/Movies";
import { useAppDispatch } from "./hooks";
import { getMoviesAsync } from "./features/moviesSlice";
import RouteTo from "./data/Routes";

function App() {
	const dispatch = useAppDispatch();
	const getMovies = async () => {
		const movies = await dispatch(getMoviesAsync());
		console.log(movies);
	};
	useEffect(() => {
		getMovies();
	}, []);

	return (
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
