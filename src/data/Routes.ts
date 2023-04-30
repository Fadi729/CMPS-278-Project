const RouteTo = {
	Movies: "/movies",
	Games: "/games",
	Books: "/books",
	Apps: "/apps",
	AppsDetails: "/apps/:appId",
	AppDetailsPage: (appId: string) => `/apps/${appId}`,
};

export default RouteTo;
