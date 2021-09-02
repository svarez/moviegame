import React, { useEffect, useState } from 'react'
import { QuizConstructor } from '../utils/QuizConstructor'

export const Quiz = () => {

    const [quiz, setQuiz] = useState({
        title : '',
        answers: [],
        correctAnswer: ''
    });

    const newQuiz = QuizConstructor();

    useEffect(() => {

        newQuiz.then(q=>{
            setQuiz(q)
        })

    }, []);

    return (
        <>
            {<div className="question">
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
