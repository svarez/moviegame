import { Api } from './Api'
import { apiUrlsProvider } from './ApiUrlsProvider'

export const SearchMovieByName = (movie) => Api(apiUrlsProvider.urlGetSearchMovie(movie));
