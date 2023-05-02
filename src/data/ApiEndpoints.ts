const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

const ApiEndpoints = {
	getMovies: `${baseUrl}/api/Movies`,

	getBooks: `${baseUrl}/api/BooksData`,

	getReviews: `${baseUrl}/api/BooksReview`,

	getGames: `${baseUrl}/api/GameData`,

	getApplications: `${baseUrl}/api/ApplicationData`,

	history: `${baseUrl}/api/History`,
};

export default ApiEndpoints;
