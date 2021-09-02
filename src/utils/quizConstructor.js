import { useContext } from "react";
import { SearchMovieByName } from "../api/ApiSelector"
import { UserContext } from "./UserContext";

export const QuizSelector = async (favMovie) => {

    const { results } = await SearchMovieByName(favMovie);
    return results.filter(result => result.original_title.toLowerCase() === favMovie.toLowerCase());

}

export const QuizConstructor = () => {

    const {selectedMovie} = useContext(UserContext);

    console.log(selectedMovie);

    /*QuizSelector().then(result=>{
        console.log(result);
    })*/

    return {
        title: 'Who was the director of the godfather?',
        answers: 
            {
                0: 'Martin Scorsese', 
                1: 'Francis Ford Coppola', 
                2: 'Stanley Kubrick', 
                3: 'Steven Spielberg'
            },
        correctAnswer: 1
    }


}
    
