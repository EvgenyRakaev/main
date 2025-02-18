import React from 'react';
import LeftMenu from "./LeftMenu";
import MainPage from "./MainPage";
import RightMenu from "./RightMenu";

const Main = () => {
    return (
        <main>
            <LeftMenu/>
            <MainPage/>
            <RightMenu/>
        </main>
    );
};

export default Main;