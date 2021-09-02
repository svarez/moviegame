import React, { useState } from 'react'
import { AppRouter } from './routers/AppRouter'
import { UserContext } from './utils/UserContext'

export const QuizApp = () => {



    const [favMovie, setFavMovie] = useState('')

    return (
        <UserContext.Provider value={{
            favMovie:favMovie,
            setFavMovie:setFavMovie
        }}>
            <AppRouter />
        </UserContext.Provider>
    )
}
