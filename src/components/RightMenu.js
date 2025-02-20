import React from 'react';
import testImage from '../images/test-img.svg'

const RightMenu = () => {
    return (
        <div className="right-menu">
            <div>
                <p>New contacts</p>
                <ul>
                    <li>
                        <a href="">
                            <img src={testImage} alt=""/>
                            New friend1
                        </a></li>
                    <li>
                        <a href="">
                            <img src={testImage} alt=""/>
                            New friend2
                        </a></li>
                </ul>
            </div>
            <div>
                <p>Contacts</p>
                <ul>
                    <li>
                        <a href="">
                            <img src={testImage} alt=""/>
                            Friend1
                        </a></li>
                    <li>
                        <a href="">
                            <img src={testImage} alt=""/>
                            Friend2
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={testImage} alt=""/>
                            Friend3
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={testImage} alt=""/>
                            Friend4
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default RightMenu;