import React, { useContext } from 'react'
import { UserContext } from '../utils/UserContext';

export const Intro = () => {

    const {favMovie, setFavMovie} = useContext(UserContext);

    const handleInputChange = (e) => {
        setFavMovie(e.target.value)
    }


    const disabled = true;

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
                        >
                            Next
                    </button>  
                </form>

            </div>
            
        </>
    )
}
