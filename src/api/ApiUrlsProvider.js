export const apiUrlsProvider = {

    apiKey: process.env.REACT_APP_API_KEY,
    baseUrlApi : 'https://api.themoviedb.org/3/',
    language: 'en-US',
    methodSearchMovie : 'search/movie',
    methodGetDetails : 'movie/',
    methodGetRecommendations : 'recommendations',
    methodGetSimilar : 'similar',
    methodGetCredits : 'credits',
    urlGetSearchMovie: function(movie) {
        movie = movie || 'The Godfather';
        return `${this.baseUrlApi}${this.methodSearchMovie}?&api_key=${this.apiKey}&query=${encodeURI(movie)}&language=${this.language}`
    },
    urlGetDetails: function(id = 238) {
        return `${this.baseUrlApi}${this.methodGetDetails}${id}?&api_key=${this.apiKey}&language=${this.language}`
    },
    urlGetRecommendations: function(id = 238) {
        return `${this.baseUrlApi}${this.methodGetDetails}${id}/${this.methodGetRecommendations}?&api_key=${this.apiKey}&language=${this.language}`
    },
    urlGetCredits: function(id = 238) {
        return `${this.baseUrlApi}${this.methodGetDetails}${id}/${this.methodGetCredits}?&api_key=${this.apiKey}&language=${this.language}`
    },
    urlGetSimilar: function(id = 238) {
        return `${this.baseUrlApi}${this.methodGetDetails}${id}/${this.methodGetSimilar}?&api_key=${this.apiKey}&language=${this.language}`
    }

}