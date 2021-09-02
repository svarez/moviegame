import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { GetNextQuestion } from '../utils/GetNextQuestion';
import { quizConstructor } from '../utils/QuizConstructor'
import { UserContext } from '../utils/UserContext';

export const Quiz = () => {

    
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [totalAnswers, setTotalAnswers] = useState(0)

    
    const { selectedMovie } = useContext(UserContext);

    const history = useHistory();
    (!selectedMovie && history.replace('./intro'))

    const [quiz, setQuiz] = useState({
        title : '',
        answers: [],
        correctAnswer: ''
    });

    useEffect(() => {

        selectedMovie && (quizConstructor(selectedMovie).then(q=>{
            setQuiz(q)
        })
        )

    }, []);

    const handleChange = (e) => {

        setTotalAnswers( totalAnswers + 1 )

        if(quiz.correctAnswer === e.target.value) {

            setCorrectAnswers( correctAnswers + 1 )

        }

        setQuiz({
            title : '',
            answers: [],
            correctAnswer: ''
        })

        GetNextQuestion(selectedMovie).then(movie=>{
            quizConstructor(movie).then(p=>{
                setQuiz(p)
            })
        })
    }

    return (
        <>
            {<div className="question">

                <div className="fav-movie">
                    <h2>You chose {selectedMovie.title}</h2>
                </div>

                <div className="statics">
                    <h3>Correct answers : 
                        <span className="statics__correct-answers"> { correctAnswers }</span> 
                        <span className="statics__total-answers"> / { totalAnswers }</span>
                    </h3>   
                </div>

                <div className="question__title">
                    <h1>{ quiz.title }</h1>
                </div>

                <div className="question__answers">

                    {
                        Object.keys(quiz.answers).map(id=>
                            <label className="radio radio-gradient" key={quiz.answers[id]}>
                                <span className="radio__input">
                                    <input
                                        name='answer'
                                        type="radio"
                                        value={id}
                                        onChange={ handleChange }
                                    /> 
                                <span className="radio__control"></span>
                                </span>
                                <span className="radio__label">{quiz.answers[id]}</span>
                            </label>
                        )
                    }

                </div>

            </div>}
            
        </>
    )
}
