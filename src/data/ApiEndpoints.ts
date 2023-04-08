const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

const ApiEndpoints = {
    getMovies: `${baseUrl}/api/Movies`,
}

export default ApiEndpoints;