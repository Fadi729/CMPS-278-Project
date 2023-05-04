const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

const ApiEndpoints = {
	getMovies: `${baseUrl}/api/Movies`,

	getBooks: `${baseUrl}/api/BooksData`,

	getGames: `${baseUrl}/api/GameData`,

	getApplications: `${baseUrl}/api/ApplicationData`,

	login: `${baseUrl}/Auth/login`,

	wishlist: `${baseUrl}/api/Wishlist`,
};

export default ApiEndpoints;
