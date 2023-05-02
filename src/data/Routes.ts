const RouteTo = {
	Movies: "/movies",
	Games: "/games",
	Books: "/books",
	Apps: "/apps",
	Admin: "/admin",
	MovieDetails: "/movies/:id",
	MovieDetailsPage: (id: string) => `/movies/${id}`,
	SimilarMovies:"/movies/details/:genre",
	SimilarMoviesPage: (genre: string) => `/movies/details/${genre}`,
	AppsDetails: "/apps/:appId",
	AppDetailsPage: (appId: string) => `/apps/${appId}`
};

export default RouteTo;
