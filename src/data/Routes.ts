const RouteTo = {
	Movies: "/movies",
	Games: "/games",
	Books: "/books",
	Apps: "/apps",
	ToS: "/ToS",
	About: "/About",
	AppsDetails: "/apps/:appId",
	GameDetails: "/games/:appId",
	AppDetailsPage: (appId: string) => `/apps/${appId}`,
	GameDetailsPage: (appId: string) => `/games/${appId}`,
};

export default RouteTo;
