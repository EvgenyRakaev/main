import React from 'react';
import testImage from "../images/test-img.svg";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><img src={testImage} alt=""/></li>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <ul>
                <li><a href="">Sign in</a></li>
                <li><a href="">Sign up</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
