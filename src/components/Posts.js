import React from 'react';
import tempImage from '../images/test-img.svg'

const Posts = ({posts}) => {
    function renderPosts(posts) {
        return posts.map(post => (
            <div className="post" key={post.id}>
                <ul className="post-sender">
                    <li>
                        <a href="">
                            <img src={tempImage} alt=""/>
                            {post.groupName}
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={tempImage} alt=""/>
                            {post.senderName}
                        </a>
                        <a href="">1h</a>
                    </li>
                </ul>
                <h1>{post.title}</h1>
                <p>{post.post}</p>
                <ul className="post-footer">
                    <li>
                        <a href="">
                            <img src={tempImage} alt=""/>
                            Like
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={tempImage} alt=""/>
                            Comment
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <img src={tempImage} alt=""/>
                            Forward
                        </a>
                    </li>
                </ul>
            </div>
        ));
    }

    return (
        <>
            {renderPosts(posts)}
        </>
    );
};

export default Posts;