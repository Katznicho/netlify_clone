const api_key = 'dbff1a9c0ac219546d565ccdbcd7c194';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}`,
    fetchNetflixOriginals:`/discover/tv?api_key=${api_key}&with_network=213`,
    fetchTopRated:`/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=27` ,
    fetchHorrMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetctDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`
}
export default requests