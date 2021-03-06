import React from 'react'
import profile from '../assets/img/profile.JPG'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-img">
                <img src={profile} alt="Profile" />
            </div>
            <div className="profile-text">
                <h1>Ncuti Xavier</h1>
                <div className="skills">
                    <h5>Skills</h5>
                    <ul>
                        <li>React Js</li>
                        <li>Vue JS</li>
                        <li>Node JS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile
