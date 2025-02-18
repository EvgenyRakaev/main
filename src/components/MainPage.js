import React from 'react';
import Posts from "./Posts";
import PostCreation from "./PostCreation";

const MainPage = () => {
    return (
        <div className="main-page">
            <PostCreation />
            <Posts/>
        </div>
    );
};

export default MainPage;