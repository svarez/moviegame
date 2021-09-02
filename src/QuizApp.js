import React, { useState } from 'react'
import { AppRouter } from './routers/AppRouter'
import { UserContext } from './utils/UserContext'

export const QuizApp = () => {

    const [favMovie, setFavMovie] = useState('')
    const [selectedMovie, setSelectedMovie] = useState('')

    return (
        <UserContext.Provider value={{
            favMovie,
            setFavMovie,
            selectedMovie,
            setSelectedMovie
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
