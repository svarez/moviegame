import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { QuizSelector } from '../utils/QuizConstructor';
import { UserContext } from '../utils/UserContext';

export const Intro = () => {

    const {favMovie, setFavMovie, setSelectedMovie} = useContext(UserContext);
    const history = useHistory();

    const handleInputChange = (e) => {
        setFavMovie(e.target.value)
    }

    let disabled = !favMovie ? true : false;

    const handleSubmit = (e) => {
        e.preventDefault()

        QuizSelector(favMovie).then(movies=> {
            if(movies.length > 0) {
                const selectedMovie = movies.reduce((acc, ele) => (acc.vote_count > ele.vote_count) ? acc : ele );
                setSelectedMovie(selectedMovie);
                history.replace('/quiz')
            } else {

            }
        })
    }

    return (
        
        <>
            <div className="description">
                <h1>Automatic quiz generator</h1>
                <p>In order for us to generate the quiz you must enter the name of your favorite movie:</p>
            </div>
            <div className="form">
                <form>
                    <div className="form__field">
                        <input 
                            type="text" 
                            className="form__field__input" 
                            autoComplete="off"
                            placeholder="Your favorite film" 
                            name="favFilm" 
                            id="favFilm" 
                            required 
                            value={ favMovie }
                            onChange={ handleInputChange }
                        />
                        <label 
                            htmlFor="favFilm"
                            className="form__field__label"
                            >
                                Your favorite film
                        </label>
                    </div>
                    <button 
                        className="form__button"
                        disabled={disabled} 
                        onClick={ handleSubmit }
                        >
                            Send
                    </button>  
                </form>

            </div>
            
        </>
    )
}
