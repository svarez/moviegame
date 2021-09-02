import React, { useState } from 'react'
import { AppRouter } from './routers/AppRouter'
import { UserContext } from './utils/UserContext'

export const QuizApp = () => {



    const [favMovie, setFavMovie] = useState('')
    const [selectedMovie, setSelectedMovie] = useState('')


    return (
        <UserContext.Provider value={{
            favMovie:favMovie,
            setFavMovie:setFavMovie,
            selectedMovie:selectedMovie,
            setSelectedMovie:setSelectedMovie
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
