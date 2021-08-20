import React, { useState } from 'react'
import { Link } from "react-scroll";
import ReactFlagsSelect from 'react-flags-select';

const HomePage = () => {
    const [selected, setSelected] = useState('');
    return (
        <div className="home-page">
            <div className="home-top-page">
                <div className="home-navbar">
                    <div className="logo">Covicalc</div>
                    <Link
                        className="contact-btn"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={2000}>
                        Contact
                    </Link>
                </div>

                <div className="home-text">
                    <div>Updates</div>
                    <div>Search a country</div>
                </div>

                <div className="home-search">
                    <div className="input-container">
                        <div className="country-input">
                            <ReactFlagsSelect
                                selected={selected}
                                onSelect={code => setSelected(code)}
                            />
                        </div>
                        <div className="date-input country-input">
                            <input type="date" name="" id="" defaultValue={new Date().toISOString().substring(0, 10)}/>
                        </div>
                        <button type="submit" className="input-btn">Submit</button>
                    </div>
                </div>

                <div className="home-data">
                    <div className="">2,188,881</div>
                    <span>Cumulatively</span>
                </div>
            </div>
            <div className="home-country-data">
                <div className="">2,188,881</div>
                <span>Cumulatively</span>
            </div>
        </div>
    )
}

export default HomePage
