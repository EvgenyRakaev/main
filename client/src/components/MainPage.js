import React, {useEffect} from 'react';
import Posts from "./Posts";
import PostCreation from "./PostCreation/PostCreation";
import postsJSON from '../temp-server-responses/posts.json'
import {LOCAL_STORAGE_KEY} from '../redux-store/store'

const MainPage = () => {
    const [posts, setPosts] = React.useState(postsJSON);


    function updatePost() {
        // Функция для обновления постов из localStorage
        const allPosts = [...postsJSON, ...JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []];
        setPosts(allPosts); // Обновляем состояние с новыми постами
    }

    useEffect(() => {
        updatePost();
    }, []);

    return (
        <div style={{maxWidth: '764px'}}>
            <PostCreation
                updatePost={updatePost}
            />
            {posts.map((post, key) => (
                <Posts
                    post={post}
                    updatePost={updatePost}
                    key={key}
                />
            ))}
        </div>
    );
};

export default MainPage;