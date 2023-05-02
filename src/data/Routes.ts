const RouteTo = {
	Movies: "/movies",
	Games: "/games",
	Books: "/books",
	Apps: "/apps",
	Wishlist: "/wishlist",
	AppsDetails: "/apps/:appId",
	AppDetailsPage: (appId: string) => `/apps/${appId}`,
	GameDetailsPage: (gameId: string) => `/games/${gameId}`,
};

export default RouteTo;
