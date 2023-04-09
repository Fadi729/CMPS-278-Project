const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

const ApiEndpoints = {
    getMovies: `${baseUrl}/api/Movies`,

    getBooks: `${baseUrl}/api/BooksData`,
}

export default ApiEndpoints;