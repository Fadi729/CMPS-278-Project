const RouteTo = {
	Apps          : "/apps",
	AppsDetails   : "/apps/:appId",
	AppDetailsPage: (appId: string) => `/apps/${appId}`,

	Games          : "/games",
	GameDetails    : "/games/:appId",
	GameDetailsPage: (appId: string) => `/games/${appId}`,

	Movies           : "/movies",
	MovieDetails     : "/movies/:id",
	MovieDetailsPage : (id: string) => `/movies/${id}`,
	SimilarMovies    : "/movies/details/:genre",
	SimilarMoviesPage: (genre: string) => `/movies/details/${genre}`,
	
	Books          : "/books",
	BookPage       : "/book/:id",
	BookPageDetails: (id: string) => `/book/${id}`,
	
	Search    : "/search/:key",
	SearchPage: (key: string) => `/search/${key}`,
	
	Wishlist: "/wishlist",
	History : "/history",
	
	Admin: "/admin",
	
	ToS  : "/ToS",
	About: "/About",
};

export default RouteTo;
