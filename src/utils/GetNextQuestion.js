import { GetRecommendations } from "../api/ApiSelector";
import { getRandomElements } from "./getRandomElement";

export const GetNextQuestion = async({id}) => {

    const {results : similarMovies} = await GetRecommendations(id);
    return getRandomElements(similarMovies, 1)[0];

}