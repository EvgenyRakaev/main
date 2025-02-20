import React from 'react';
import testImage from "../images/test-img.svg";

const LeftMenu = () => {
    return (
        <div className="left-menu">
            <ul>
                <li>
                    <a href="">
                        <img src={testImage} alt=""/>
                        My page
                    </a></li>
                <li>
                    <a href="">
                        <img src={testImage} alt=""/>
                        Friends
                    </a></li>
                <li>
                    <a href="">
                        <img src={testImage} alt=""/>
                        Groups
                    </a></li>
                <li>
                    <a href="">
                        <img src={testImage} alt=""/>
                        func4
                    </a></li>
                <li>
                    <a href="">
                        <img src={testImage} alt=""/>
                        func5
                    </a></li>
            </ul>
        </div>
    );
};

export default LeftMenu;
