import React from 'react'
import { quizConstructor } from '../utils/quizConstructor'

export const Quiz = () => {

    const { title,  answers } = quizConstructor

    return (
        <>
            <div className="question">
                <div className="question__title">
                    <h1>{ title }</h1>
                </div>

                <div className="question__answers">

                    {
                        Object.keys(answers).map(id=>
                            <label className="radio radio-gradient" key={answers[id]}>
                                <span className="radio__input">
                                    <input
                                        
                                        name='answer'
                                        type="radio"
                                    /> 
                                <span className="radio__control"></span>
                                </span>
                                <span className="radio__label">{answers[id]}</span>
                            </label>
                        )
                    }

                </div>

            </div>
            
        </>
    )
}
