import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Icons = () => {
    return (
        //Social Icons are displayed here.
        // <Link className="Nav-link" to="/bio">Bio</Link>
        <div>
            <div>
                <a href="mailto:steven.rosenblum4d211@gmail.com" >
                    <img src="./icons/icons8-new-post-50.png" className="Icon-small" alt="email" />
                </a>
                <img src="./icons/icons8-twitter-50.png" className="Icon-small" alt="twitter" />
                <img src="./icons/icons8-instagram-50.png" className="Icon-small" alt="instagram" />
                <a href="https://www.linkedin.com/in/stevenrosenblum/">
                    <img src="./icons/icons8-linkedin-50.png" className="Icon-small" alt="linkedin" />
                </a>
                <a href="https://www.facebook.com/StevenRosenblumDistrict211BOE/">
                    <img src="./icons/icons8-facebook-50.png" className="Icon-small" alt="Facebook" />
                </a>
                <a href="/">
                    <img src="./icons/icons8-home-page-50.png" className="Icon-small" alt="Home" />
                </a>
            </div>
        </div>

    )
}

export default Icons;