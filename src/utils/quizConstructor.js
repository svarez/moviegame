import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { SearchMovieByName } from "../api/ApiSelector"
import { getRandomElements } from "./getRandomElement";
import { getRangeOfYears } from "./getRangeOfYears";
import { UserContext } from "./UserContext";

export const QuizSelector = async (favMovie) => {

    const { results } = await SearchMovieByName(favMovie);
    return results.filter(result => result.original_title.toLowerCase() === favMovie.toLowerCase());

}
export const QuizConstructor = () => {

    const history = useHistory();
    const {selectedMovie} = useContext(UserContext);

    (!selectedMovie && history.replace('./intro'))

    return getQuestion(selectedMovie).then(question=>question);

    /*QuizSelector().then(result=>{
        console.log(result);
    })*/

    /*return {
        title: 'Who was the director of the godfather?',
        answers: 
            {
                0: 'Martin Scorsese', 
                1: 'Francis Ford Coppola', 
                2: 'Stanley Kubrick', 
                3: 'Steven Spielberg'
            },
        correctAnswer: 1
    }*/


}
const getQuestion = (movie) => {

    const randomNumber = Math.floor(Math.random() * 3);
    return releaseDateQuestion(movie);
          
    /*switch (randomQuestion) {
        case 'release_date':
            return releaseDateQuestion(movieName);

        case 'director':
            return directorQuestion(movieName);

        case 'character':
            return characterQuestion(movieName);
    
        default:
            break;
    }*/

}
const releaseDateQuestion = async (movie) => {

    const { title, release_date } = movie;
    
    const titleQuestion = `What year was ${title} released?`;
    const date = parseInt(release_date).toString();
    const randomYears = getRangeOfYears(parseInt(date));
    const getAnswers = [...getRandomElements(randomYears, 3), date].sort(() => Math.random() - 0.5);
    const correctAnswer = Object.keys(getAnswers).find(key => getAnswers[key] === date);
    
    const quiz = {
                title: titleQuestion,
                answers: getAnswers,
                correctAnswer: correctAnswer
            };

    return quiz;

}
