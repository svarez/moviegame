import { Api } from './Api'
import { apiUrlsProvider } from './ApiUrlsProvider'

export const SearchMovieByName = (movie) => Api(apiUrlsProvider.urlGetSearchMovie(movie));
export const GetCredits = (id) => Api(apiUrlsProvider.urlGetCredits(id));
export const GetSimilar = (id) => Api(apiUrlsProvider.urlGetSimilar(id));


