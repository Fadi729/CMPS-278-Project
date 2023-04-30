const RouteTo = {
	Movies: "/movies",
	Games: "/games",
	Books: "/books",
	Apps: "/apps",
	MovieDetails: "/movies/:id",
	MovieDetailsPage: (id: string) => `/movies/${id}`,
	AppsDetails: "/apps/:appId",
	AppDetailsPage: (appId: string) => `/apps/${appId}`,
};

export default RouteTo;
