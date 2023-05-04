const RouteTo = {
	Movies: "/movies",
	Games: "/games",
	Books: "/books",
	Apps: "/apps",
	Admin: "/admin",
	Search: "/search/:key",
	SearchPage: (key: string) => `/search/${key}`,
	MovieDetails: "/movies/:id",
	MovieDetailsPage: (id: string) => `/movies/${id}`,
	SimilarMovies:"/movies/details/:genre",
	SimilarMoviesPage: (genre: string) => `/movies/details/${genre}`,
	Wishlist: "/wishlist",
	AppsDetails: "/apps/:appId",
	AppDetailsPage: (appId: string) => `/apps/${appId}`,
	GameDetailsPage: (gameId: string) => `/games/${gameId}`,
};

export default RouteTo;
