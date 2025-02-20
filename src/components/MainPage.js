import React, {useEffect} from 'react';
import Posts from "./Posts";
import PostCreation from "./PostCreation";
import postsJSON from '../temp-server-responses/posts.json'

const MainPage = () => {
    const [posts, setPosts] = React.useState(postsJSON);

    function updatePost() {
        // Функция для обновления постов из localStorage
        const allPosts = [...postsJSON];
        Object.keys(localStorage).forEach(key => {
            let post = JSON.parse(localStorage.getItem(key));
            allPosts.push(post);
        });
        setPosts(allPosts); // Обновляем состояние с новыми постами
    }

    useEffect(() => {
        updatePost();
    }, []);

    return (
        <div className="main-page">
            <PostCreation
                updatePost={updatePost}
            />
            <Posts
                posts={posts}
            />
        </div>
    );
};

export default MainPage;