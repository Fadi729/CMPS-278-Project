import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Apps from "./Pages/Apps";
import Books from "./Pages/Books";
import Games from "./Pages/Games";
import Movies from "./Pages/Movies";
import MovieDetails from "./Pages/MovieDetails";
import RouteTo from "./data/Routes";
import AppDetails from "./Pages/AppDetails";
import SimilarMovies from "./Pages/SimilarMovies";

function App() {
	return (
		<Routes>
			<Route path="/" element={<NavBar />}>
				<Route index path={RouteTo.Apps} element={<Apps />} />
				<Route path={RouteTo.AppsDetails} element={<AppDetails />} />
				<Route path={RouteTo.Games} element={<Games />} />
				<Route path={RouteTo.Movies} element={<Movies />} />
				<Route path={RouteTo.MovieDetails} element={<MovieDetails />} />
				<Route path={RouteTo.SimilarMovies} element={<SimilarMovies />} />
				<Route path={RouteTo.Books} element={<Books />} />
			</Route>
		</Routes>
	);
}

export default App;
