import React from 'react'
import Continents from '../components/Continents'
import HomePage from '../components/HomePage'
import Profile from '../components/Profile'

const Home = () => {
    return (
        <div>
            <HomePage />
            <Continents />
            <Profile />
        </div>
    )
}

export default Home
