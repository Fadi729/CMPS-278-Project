import { useEffect, useState } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Admin from "./Pages/Admin";
import Apps from "./Pages/Apps";
import Books from "./Pages/Books";
import Games from "./Pages/Games";
import Movies from "./Pages/Movies";
import MovieDetails from "./Pages/MovieDetails";
import RouteTo from "./data/Routes";
import AppDetails from "./Pages/AppDetails";
import SimilarMovies from "./Pages/SimilarMovies";
import WishList from "./Pages/WishList";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getApplicationsAsync } from "./features/applicationsSlice";
import { getGamesAsync } from "./features/gamesSlice";
import { getMoviesAsync } from "./features/moviesSlice";
import jwtDecode from "jwt-decode";
import { User } from "./data/Interfaces/User";
import { getWishListAsync } from "./features/wishListSlice";
import { setUser } from "./features/authSlice";

function App() {
	const dispatch = useAppDispatch();
	const { applications, isLoading: appIsLoading } = useAppSelector((state) => state.Applications);
	const { games, isLoading: gameIsLoading } = useAppSelector((state) => state.Games);
	const { movies, isLoading: movieIsLoading } = useAppSelector((state) => state.Movies);
	async function getApps() {
		await dispatch(getApplicationsAsync());
	}

	async function getGames() {
		await dispatch(getGamesAsync());
	}

	async function getMovies() {
		await dispatch(getMoviesAsync());
	}


	
	useEffect(() => {
		if (Object.keys(applications).length === 0) {
			getApps();
		}
		if (Object.keys(games).length === 0) {
			getGames();
		}
		if (Object.keys(movies).length === 0) {
			getMovies();
		}
	}, []);

	useEffect (() => {
		const token = localStorage.getItem("token");
		// check if token exists
		if (token) {
			// check if token has not expired
			const decodedToken = jwtDecode<User>(token)
			if (decodedToken.exp! * 1000 < Date.now()) {
				localStorage.removeItem("token");
			}
			else {
				dispatch(setUser(decodedToken))
				dispatch(getWishListAsync());
			}
		}	
	}, [])
	return (
		<>
			{!appIsLoading && !gameIsLoading && !movieIsLoading &&(
				<Routes>
					<Route path="/" element={<NavBar />}>
						<Route index element={<Navigate to={RouteTo.Apps} />} />
						<Route path={RouteTo.Apps} element={<Apps />} />
						<Route path={RouteTo.Admin} element={<Admin />} />
						<Route path={RouteTo.AppsDetails} element={<AppDetails />} />
						<Route path={RouteTo.Games} element={<Games />} />
						<Route path={RouteTo.Movies} element={<Movies />} />
						<Route path={RouteTo.MovieDetails} element={<MovieDetails />} />
						<Route path={RouteTo.SimilarMovies} element={<SimilarMovies />} />
						<Route path={RouteTo.Books} element={<Books />} />
						<Route path={RouteTo.Wishlist} element={<WishList />} />
					</Route>
				</Routes>
			)}
		</>
	);
}

export default App;
