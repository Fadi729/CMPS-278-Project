import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";

import Apps from "./Pages/Apps";
import Books from "./Pages/Books";
import Games from "./Pages/Games";
import Movies from "./Pages/Movies";
import RouteTo from "./data/Routes";
import AppDetails from "./Pages/AppDetails";
import WishList from "./Pages/WishList";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getApplicationsAsync } from "./features/applicationsSlice";
import { getGamesAsync } from "./features/gamesSlice";

function App() {
	const dispatch = useAppDispatch();
	const { applications, isLoading: appIsLoading } = useAppSelector((state) => state.Applications);
	const { games, isLoading: gameIsLoading } = useAppSelector((state) => state.Games);
	async function getApps() {
		await dispatch(getApplicationsAsync());
	}

	async function getGames() {
		await dispatch(getGamesAsync());
	}

	useEffect(() => {
		if (Object.keys(applications).length === 0) {
			getApps();
		}
		if (Object.keys(games).length === 0) {
			getGames();
		}
	}, []);
	return (
		<>
			{!appIsLoading && !gameIsLoading && (
				<Routes>
					<Route path="/" element={<NavBar />}>
						<Route index path={RouteTo.Apps} element={<Apps />} />
						<Route path={RouteTo.AppsDetails} element={<AppDetails />} />
						<Route path={RouteTo.Games} element={<Games />} />
						<Route path={RouteTo.Movies} element={<Movies />} />
						<Route path={RouteTo.Books} element={<Books />} />
						<Route path={RouteTo.Wishlist} element={<WishList />} />
					</Route>
				</Routes>
			)}
		</>
	);
}

export default App;
