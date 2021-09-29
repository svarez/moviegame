import React from 'react'
import { 
    HashRouter, 
    Redirect, 
    Route, 
    Switch 
} from 'react-router-dom'

import { Intro } from '../components/Intro'
import { Quiz } from '../components/Quiz'
import { Header } from '../components/ui/Header'





export const AppRouter = () => {
    return (
        <HashRouter basename='/'>

            <div className="app-container">

                <Header />

                <div className="main-container">
                    <Switch>
                        <Route exact path="/intro" component={ Intro } />
                        <Route exact path="/quiz" component={ Quiz } />
                        
                        <Redirect to="/intro" />

                    </Switch>
                </div>

            </div>
            
        </HashRouter>
    )
}
