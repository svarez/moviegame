import { GetCredits, GetSimilar, SearchMovieByName } from "../api/ApiSelector"
import { getRandomElements } from "./getRandomElement";
import { getRangeOfYears } from "./getRangeOfYears";

export const QuizSelector = async (favMovie) => {

    const { results } = await SearchMovieByName(favMovie);
    return results.filter(result => result.original_title.toLowerCase() === favMovie.toLowerCase());

}
export const quizConstructor = (movie) => {

    return getQuestion(movie).then(question=>question);

}
const getQuestion = (movie) => {

    const randomNumber = Math.floor(Math.random() * 3);
          
    switch (randomNumber) {
        case 0:
            return releaseDateQuestion(movie)

        case 1:
            return directorQuestion(movie)

        case 2:
            return characterQuestion(movie)
    
        default:
            return releaseDateQuestion(movie)
    }

}
const releaseDateQuestion = async (movie) => {

    const { title, release_date } = movie;
    
    const titleQuestion = `What year was ${title} released?`;
    const date = parseInt(release_date).toString();
    const randomYears = getRangeOfYears(parseInt(date));
    const answers = [...getRandomElements(randomYears, 3), date].sort(() => Math.random() - 0.5);
    const correctAnswer = Object.keys(answers).find(key => answers[key] === date)
    
    const quiz = {
                title: titleQuestion,
                answers: answers,
                correctAnswer: correctAnswer
            }

    return quiz

}


const directorQuestion = async (movie) => {

    const { id, title } = movie
    const {crew} = await GetCredits(id)
    const {name : director} = crew.find((crew) => crew.job === 'Director')
    const {results : similarMovies} = await GetSimilar(id)
    const similarDirectors = await Promise.all(similarMovies.map(async(similar)=>{

            return await GetCredits(similar.id).then(async({crew})=>{
                return crew.find(d => (d.job === 'Director' && d.name !== director))?.name
            });
            
    })
    );
    const titleQuestion = `Who directed the movie ${title}?`
    const answers = [...getRandomElements(similarDirectors, 3), director].sort(() => Math.random() - 0.5)
    const correctAnswer = Object.keys(answers).find(key => answers[key] === director)
    
    const quiz = {
                title: titleQuestion,
                answers: answers,
                correctAnswer: correctAnswer
            };

    return quiz

}
const characterQuestion = async (movie) => {

    const { id, title } = movie
    const {cast} = await GetCredits(id)
    const selectedCast = cast[Math.floor(Math.random() * 4)]
    const selectedActor = selectedCast.name
    const selectedCharacter = selectedCast.character
    const wrongCast = cast.map(actor=>actor.name).filter((name,idx)=>(name!==selectedActor && idx < 10))
    const titleQuestion = `What actor/actress plays ${selectedCharacter} in ${title}?`
    const answers = [...getRandomElements(wrongCast, 3), selectedActor].sort(() => Math.random() - 0.5)
    const correctAnswer = Object.keys(answers).find(key => answers[key] === selectedActor)

    const quiz = {
        title: titleQuestion,
        answers: answers,
        correctAnswer: correctAnswer
    };

    return quiz

}
