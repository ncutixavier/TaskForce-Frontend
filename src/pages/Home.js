import React from 'react'
import Continents from '../components/Continents'
import HomePage from '../components/HomePage'
import Profile from '../components/Profile'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <HomePage />
            <Continents />
            <Profile />
            <Footer />
        </div>
    )
}

export default Home
